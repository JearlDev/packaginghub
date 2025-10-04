import { computed } from "vue";

export const useRichText = (content) => {
  const renderRichText = (blocks) => {
    if (!blocks) return "";

    return blocks
      .map((block) => {
        switch (block.type) {
          case "paragraph":
            const paragraphContent = block.children
              .map((child) => {
                let text = child.text;

                if (child.type === "link") {
                  // Check if URL is relative (internal) or absolute (external)
                  const isExternal = /^(?:[a-z]+:)?\/\//i.test(child.url);
                  return isExternal
                    ? `<a href="${child.url}" target="_blank" rel="noopener noreferrer">${child.children[0].text}</a>`
                    : `<a href="${child.url}">${child.children[0].text}</a>`;
                }
                if (child.bold) {
                  text = `<strong>${text}</strong>`;
                }
                if (child.italic) {
                  text = `<em>${text}</em>`;
                }
                if (child.underline) {
                  text = `<u>${text}</u>`;
                }
                if (child.strikethrough) {
                  text = `<del>${text}</del>`;
                }
                return text;
              })
              .join("");
            return `<p>${paragraphContent}</p>`;

          case "list":
            const listItems = block.children
              .map((item) => {
                if (item.type === "list-item") {
                  const itemContent = item.children
                    .map((child) => {
                      if (child.type === "link") {
                        return `<a href="${child.url}">${child.children[0].text}</a>`;
                      }
                      if (child.bold) {
                        return `<strong>${child.text}</strong>`;
                      }
                      if (child.italic) {
                        return `<em>${child.text}</em>`;
                      }
                      if (child.underline) {
                        return `<u>${child.text}</u>`;
                      }
                      if (child.strikethrough) {
                        return `<del>${child.text}</del>`;
                      }
                      return child.text;
                    })
                    .join("");
                  return `<li>${itemContent}</li>`;
                }
                return "";
              })
              .join("");

            const listTag = block.format === "ordered" ? "ol" : "ul";
            return `<${listTag}>${listItems}</${listTag}>`;

          case "heading":
            const headingContent = block.children
              .map((child) => {
                let text = child.text;

                if (block.level === 1) {
                  return `<h1>${child.text}</h1>`;
                }
                if (block.level === 2) {
                  return `<h2>${child.text}</h2>`;
                }
                if (block.level === 3) {
                  return `<h3>${child.text}</h3>`;
                }
                if (block.level === 4) {
                  return `<h4>${child.text}</h4>`;
                }
                if (block.level === 5) {
                  return `<h5>${child.text}</h5>`;
                }
                if (block.level === 6) {
                  return `<h6>${child.text}</h6>`;
                }
                return text;
              })
              .join("");
            return `<p>${headingContent}</p>`;

          default:
            return "";
        }
      })
      .join("");
  };

  const formattedContent = computed(() => {
    return renderRichText(content);
  });

  return {
    formattedContent,
  };
};
