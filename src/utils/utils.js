export const getMenuLink = menu => {
    let link = {}
  
    if (menu) {
      const { Slug, Custom_Link } = menu
      const formattedCustomLink = Custom_Link?.replace(/ /g, "")
  
      if (formattedCustomLink) {
        if (formattedCustomLink.includes("http") || Custom_Link) {
          link = {
            href: formattedCustomLink,
            target: "_blank",
          }
        } else {
          link = {
            to: formattedCustomLink,
          }
        }
      } else if (Slug) {
        link = {
          to: `/${Slug}/`,
        }
      }
    }
  
    return link
  }
  