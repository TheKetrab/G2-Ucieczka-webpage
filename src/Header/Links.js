import './Links.css';

function Links() {
  return (
    <div class="links">
      <div class="links">
          <a href="https://www.youtube.com/channel/UCnziKIMl8RkG39k90V8SPRQ" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/yt.png"} alt="YouTube"/></a>
          <a href="https://gothic.fandom.com/pl/wiki/Ucieczka" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/wiki.png"} alt="Gothicpedia"/></a>
          <a href="https://themodders.org/index.php?board=559.0" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/tm.png"} alt="TheModders"/></a>
          <a href="https://www.facebook.com/G2Ucieczka" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/fb.png"} alt="Facebook"/></a>
          <a href="https://discord.gg/SSxjzfs" target="_blank"><img src={process.env.PUBLIC_URL + "/icons/disc.png"} alt="Discord"/></a>
      </div>
    </div>
  );
}

export default Links;
