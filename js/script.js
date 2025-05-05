
function adaptSVGTextStructure() {
  const isMobile = window.innerWidth <= 768;
  const text = document.getElementById('svgText');
  const rect1 = document.getElementById('rect1');
  const rect2 = document.getElementById('rect2');
  const rect3 = document.getElementById('rect3');
  const rect4 = document.getElementById('rect4');

  if (text) {
    if (isMobile) {
      text.innerHTML = `
        <tspan x="5" y="16">We're here</tspan>
        <tspan x="5" y="30">to</tspan>
        <tspan x="127" y="30">make</tspan>
        <tspan x="77" y="44">healthy living</tspan>
        <tspan x="12" y="58">effortless, so you can</tspan>
        <tspan x="5" y="72">live longer and</tspan>
        <tspan x="5" y="86"> happier</tspan>
      `;
    } else {
      text.innerHTML = `
        <tspan x="2" y="16">We're here</tspan>
        <tspan x="105" y="16">to make</tspan>
        <tspan x="2" y="40">healthy</tspan>
        <tspan x="70" y="40">living effortless,</tspan>
        <tspan x="2" y="60">so you can</tspan>
        <tspan x="93" y="60">live longer</tspan>
        <tspan x="2" y="81">and happier</tspan>
      `;
    }
  }

  if (rect1) {
    rect1.setAttribute('width', isMobile ? '85' : '26');
  }
  if (rect2) {
    rect2.setAttribute('x', isMobile ? '22' : '52');
    rect2.setAttribute('y', isMobile ? '22' : '32');
    rect2.setAttribute('width', isMobile ? '100' : '15');
    
  }
  if (rect3) {
    rect3.setAttribute('x', isMobile ? '5' : '75');
    rect3.setAttribute('y', isMobile ? '35' : '51');
    rect3.setAttribute('width', isMobile ? '65' : '15');
  }
  if (rect4) {
    rect4.setAttribute('x', isMobile ? '105' : '80');
    rect4.setAttribute('y', isMobile ? '65' : '73');
    rect4.setAttribute('width', isMobile ? '55' : '75');
  }

    // Добавление rect5 для мобильной версии
    const mask = document.getElementById('myMask');
    let rect5 = document.getElementById('rect5');
  
    if (isMobile) {
      if (mask && !rect5) {
        rect5 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect5.setAttribute("id", "rect5");
        rect5.setAttribute("x", "40");
        rect5.setAttribute("y", "75");
        rect5.setAttribute("width", "30");
        rect5.setAttribute("height", "15");
        rect5.setAttribute("fill", "black");
        mask.appendChild(rect5);
      } else if (rect5) {
        rect5.setAttribute("width", "100");
        rect5.setAttribute("height", "15");
        rect5.setAttribute("x", "60");
        rect5.setAttribute("y", "80");
      }
    } else {
      if (rect5 && rect5.parentNode) {
        rect5.parentNode.removeChild(rect5);
      }
    }
  
}


window.addEventListener('DOMContentLoaded', adaptSVGTextStructure);
window.addEventListener('resize', adaptSVGTextStructure);



