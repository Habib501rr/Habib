// Elemen DOM
        const menuIcon = document.getElementById('menuIcon');
        const overlayMenu = document.getElementById('overlayMenu');
        const closeBtn = document.getElementById('closeBtn');
        
        // Fungsi untuk membuka menu overlay
        function openOverlay() {
            overlayMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Mencegah scrolling di body
        }
        
        // Fungsi untuk menutup menu overlay
        function closeOverlay() {
            overlayMenu.classList.remove('active');
            document.body.style.overflow = 'auto'; // Mengembalikan scrolling
        }
        
        // Event listeners
        menuIcon.addEventListener('click', openOverlay);
        closeBtn.addEventListener('click', closeOverlay);
        
        // Tutup overlay jika klik di luar area menu (opsional)
        document.addEventListener('click', function(event) {
            if (overlayMenu.classList.contains('active') && 
                !overlayMenu.contains(event.target) && 
                !menuIcon.contains(event.target)) {
                closeOverlay();
            }
        });
        
        // Animasi untuk menu icon (ubah menjadi X saat aktif)
        menuIcon.addEventListener('click', function() {
            const spans = this.querySelectorAll('span');
            if (overlayMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });