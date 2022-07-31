import React from 'react';

const contact = ({ }) => {
return (
<div className="row">
<div className="col s2 left  leftSide" id="contact">
  <h2  className="leftSideH2">Contact</h2>
</div>
<div className="col s10 right">
  <h3 className="contactLinks">
    <a href="mailto:mdschenck@gmail.com"> mdschenck@gmail.com </a>
    <a
      href="https://www.linkedin.com/in/michaeldschenck"
      target="top"
    >
      Linkedin
    </a>
    <a href="https://www.github.com/mdschenck" target="top">
      GitHub
    </a>
    <a
      href="./assets/files/MIchaelSchenck-Resume2022.pdf"
      target="top"
    >
      Resume
    </a>
  </h3>
</div>
</div>
);
};

export default contact;