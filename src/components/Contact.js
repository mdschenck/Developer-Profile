import React from 'react';

const contact = ({ }) => {
return (
<div class="row">
<div class="col s2 left  leftSide" id="contact">
  <h2  class="leftSideH2">Contact</h2>
</div>
<div class="col s10 right">
  <h3 class="contactLinks">
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