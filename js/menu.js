/**
 * EMBER & OLIVE - Interactive Menu Engine
 * Dynamic Category Switching (Starters, Mains, Desserts, Drinks) in Vanilla JS
 */

const MENU_DATA = {
  starters: [
    { title: "Charred Burrata", desc: "Smoked tomato chutney, basil oil, grilled sourdough", price: "₹895" },
    { title: "Fire-Roasted Bone Marrow", desc: "Herb salad, pickled mustard seed, warm brioche", price: "₹950" },
    { title: "Wood-Fired Octopus", desc: "Romesco sauce, smoked paprika oil, crispy potatoes", price: "₹1,150" },
    { title: "Ember-Baked Goat Cheese", desc: "Wild honey, toasted pine nuts, charred figs", price: "₹850" },
    { title: "Smoked Beef Tartare", desc: "Egg yolk confit, caperberries, house potato crisps", price: "₹1,050" },
    { title: "Charred Heirloom Carrots", desc: "Whipped ricotta, pistachio dukkah, pomegranate glaze", price: "₹720" }
  ],
  mains: [
    { title: "Ember-Grilled Sea Bass", desc: "Lemon beurre blanc, braised fennel, sea sea-samphire", price: "₹1,450" },
    { title: "Slow-Roasted Lamb Shank", desc: "Rosemary reduction, smoked garlic mash, roasted root vegetables", price: "₹1,595" },
    { title: "Truffle & Wild Mushroom Risotto", desc: "Aged parmesan, black truffle butter, crispy sage", price: "₹1,195" },
    { title: "Wood-Fired Prime Ribeye (300g)", desc: "Smoked marrow butter, charred shallots, red wine jus", price: "₹2,250" },
    { title: "Hand-Crafted Wild Mushroom Ravioli", desc: "Brown butter, crispy sage, aged parmesan", price: "₹1,050" },
    { title: "Open-Fire Spiced Half Chicken", desc: "Charred lemon, smoked paprika jus, herb potatoes", price: "₹1,280" }
  ],
  desserts: [
    { title: "Dark Chocolate Torte", desc: "Flaky sea salt, cold-pressed olive oil, vanilla bean cream", price: "₹695" },
    { title: "Smoked Caramel Tart", desc: "Bourbon caramel, roasted pecan crunch, clotted cream", price: "₹650" },
    { title: "Charred Peach & Honey Crisp", desc: "Thyme-infused mascarpone, toasted almond crumble", price: "₹620" },
    { title: "Artisanal Cheese Selection", desc: "Aged local & imported cheeses, truffle honey, lavash", price: "₹920" }
  ],
  drinks: [
    { title: "Smoked Old Fashioned", desc: "Bourbon, hickory smoke, aromatic bitters, orange peel", price: "₹850" },
    { title: "Ember & Olive Signature Martini", desc: "Botanical gin, olive leaf infusion, dry vermouth", price: "₹890" },
    { title: "Charred Rosemary Paloma", desc: "Reposado tequila, fresh grapefruit, smoked rosemary syrup", price: "₹790" },
    { title: "Reserved Vintage Pinot Noir (Glass)", desc: "Burgundy, France — 2020", price: "₹1,100" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initMenuTabs();
});

function initMenuTabs() {
  const tabBtns = document.querySelectorAll('.menu-tab-btn');
  const container = document.getElementById('menu-items-container');

  if (!tabBtns.length || !container) return;

  function renderCategory(categoryKey) {
    const items = MENU_DATA[categoryKey] || [];

    // Fade out effect
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
      container.innerHTML = items.map(item => `
        <div class="menu-item-row">
          <div class="menu-item-header">
            <h4 class="menu-item-title">${item.title}</h4>
            <span class="price-tag">${item.price}</span>
          </div>
          <p class="menu-item-desc">${item.desc}</p>
        </div>
      `).join('');

      // Fade in effect
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 200);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderCategory(category);
    });
  });

  // Render initial default category (Mains)
  renderCategory('mains');
}
