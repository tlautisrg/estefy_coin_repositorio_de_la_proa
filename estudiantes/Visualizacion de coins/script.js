// Simple search handler for the header search
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');

    if (!form || !input) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = input.value.trim().toLowerCase();

        // try to find coin items in the page and filter them
        const items = document.querySelectorAll('.coin-item');
        if (items && items.length > 0) {
            let foundAny = false;
            items.forEach(item => {
                const name = (item.getAttribute('data-name') || item.textContent || '').toLowerCase();
                if (!q || name.includes(q)) {
                    item.style.display = '';
                    foundAny = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (!foundAny) {
                alert('No se encontraron resultados para: ' + q);
            }
            return;
        }

        // No items to filter: basic fallback behavior
        if (q) {
            // For now just show an alert or log; you can replace this with navigation or API search
            alert('Buscando: ' + q);
        }
    });
});
