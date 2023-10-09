import globby from "globby";
import matter from "gray-matter";
import fs from "fs-extra";

export async function getPosts(): Promise<object[]> {

  let paths = await getPostMDFilePaths();

  let posts = await Promise.all(
    paths.map(async (item) => {

      const content = await fs.readFile(item, "utf-8");
      // content = all of the MD files in a string

      const { data } = matter(content);
      // data is an object with the frontmatter

      data.date = _convertDate(data.date);

      return {
        frontMatter: data,
        regularPath: `/${item.replace(".md", ".html")}`,
      };
    })
  );

  posts.sort(_compareDate);
  return posts;
}

export async function getPostLength(): Promise<number> {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length;
}

function _convertDate(date = new Date().toString()): string {
  const json_date = new Date(date).toJSON();
  const date_obj = json_date.split("T")[0];
  return date_obj;
}

function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1;
}

async function getPostMDFilePaths() {
  let paths = await globby(["**.md"], {
    ignore: ["node_modules", "README.md"],
  });
  return paths.filter((item) => item.includes("posts/"));
}
