import './Links.css';

function Links() {
  return (
    <div class="links">
      <div class="links">
          <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/yt.png"} alt="YouTube"/></a>
          <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/wiki.png"} alt="Gothicpedia"/></a>
          <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/tm.png"} alt="TheModders"/></a>
          <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/fb.png"} alt="Facebook"/></a>
          <a href="" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/disc.png"} alt="Discord"/></a>
      </div>
    </div>
  );
}

export default Links;
