import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("blog").title("Blogs"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["author", "blog"].includes(item.getId()!)
      ),
    ]);
