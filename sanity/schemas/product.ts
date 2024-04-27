import { Rule, validation } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Title is required"),
    },
    {
      name: "serial",
      title: "Serial Number",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().error("Serial Number is required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt text" }],
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Price is required"),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Stock is required"),
    },
    {
      name: "vendors",
      title: "Vendors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "vendor" }] }],
      validation: (Rule: Rule) => Rule.required().error("Tags are required"),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule: Rule) => Rule.required().error("Tags are required"),
    },
  ],
};
