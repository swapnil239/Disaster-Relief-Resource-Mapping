let allCards = [];
let currentFilter = 'all';

document.getElementById('cityInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchResources();
});

function searchResources() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) { alert('Please enter a city name!'); return; }

  document.getElementById('loader').style.display = 'block';
  document.getElementById('results').innerHTML = '';
  document.getElementById('locationHeader').style.display = 'none';

  setTimeout(() => {
    const resources = findCity(city);
    allCards = resources;
    renderCards(resources, city);
    document.getElementById('loader').style.display = 'none';
  }, 600);
}

function renderCards(resources, city) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  const filtered = currentFilter === 'all' ? resources : resources.filter(r => r.type === currentFilter);

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>No resources found.</p></div>';
    return;
  }

  document.getElementById('locationBadge').textContent = '📍 Resources for: ' + city.charAt(0).toUpperCase() + city.slice(1);
  document.getElementById('locationHeader').style.display = 'block';

  filtered.forEach((r, i) => {
    const emoji = r.type==='food'?'🍛':r.type==='medical'?'🏥':r.type==='shelter'?'🏠':'🤝';
    const statusClass = r.status==='Open'?'status-open':r.status==='Limited'?'status-limited':'status-full';
    const card = document.createElement('div');
    card.className = 'ai-card';
    card.style.animationDelay = (i * 0.07) + 's';
    card.innerHTML = `
      <span class="card-badge badge-${r.type}">${emoji} ${r.type}</span>
      <h3>${r.name}</h3>
      <p>📍 <span>${r.location}</span></p>
      <p>✅ <span>${r.available}</span></p>
      <p>👥 Capacity: <span>${r.capacity}</span></p>
      <p>📞 <span>${r.contact}</span></p>
      <p>Status: <span class="${statusClass}">${r.status}</span></p>`;
    container.appendChild(card);
  });
}

function filterCards(btn) {
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  if (allCards.length > 0) renderCards(allCards, document.getElementById('cityInput').value.trim());
}