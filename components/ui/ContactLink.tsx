import React from 'react';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}

const ContactLink = ({ href, icon, label, value, external = false }: ContactLinkProps) => {
  return (
    <a 
      href={href} 
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex items-center p-3 bg-deep-purple/40 rounded-lg border border-mauve/10 hover:border-mauve/30 transition-all duration-300"
    >
      <span className="mr-3 text-mauve">{icon}</span>
      <div>
        <div className="text-xs text-slate">{label}</div>
        <div className="text-sm text-seashell">{value}</div>
      </div>
    </a>
  );
};

export default ContactLink;

