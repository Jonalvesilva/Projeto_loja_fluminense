import { footerLinks } from "@/constants/footerLinks";

export default function FooterLinks() {
  return (
    <div className="footerLinks">
      {footerLinks.map((footerItem: any) => (
        <ul
          key={`footer_title_${footerItem.name}`}
          className=".footerLinks__list"
        >
          <li className="footerLinks__title">{footerItem.name}</li>
          {footerItem.links.map((item: any) => {
            return item.name ? (
              <li
                className="footerLinks__itemText"
                key={`footer_link_${item.name}`}
              >
                {item.name}
              </li>
            ) : (
              <img
                src={item.imageUrl}
                className="footerLinks__itemImg"
                key={`footer_link_${item.name}`}
              />
            );
          })}
        </ul>
      ))}
    </div>
  );
}
