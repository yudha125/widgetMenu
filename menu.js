function addDynamicContent(url1, url2, url3) {
    // Menambahkan CSS dinamis
    const style = document.createElement('style');
    style.innerHTML = `
        .menu {
            position: fixed;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            bottom: 10%;
            left: 6%;
            transform: translateX(-50%);
            cursor: pointer;
            z-index:1000;
        }
        
        .menu img {
            width: auto;
            height: 110px;
            transition: all 1s ease;
        }
        @media (max-width: 768px) {
            .menu {
                position: fixed;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                bottom: 8%;
                left: 12%;
                transform: translateX(-50%);
                cursor: pointer;
                z-index:1000;
            }
            .menu img {
                width: auto;
                height: 100px;
                transition: all 1s ease;
            }
        }
        .extra-images {
            display: none;
            position: absolute;
            bottom: 100%;
            left: 60%;
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
            transition: all 1s ease;
            z-index: 902;
        }
        
        .extra-images img {
            margin-bottom: 10px;
            margin-left:2px;
            width: 90px;
            height: 90px;
            transition: transform 5s ease-in-out;
        }
        
        .extra-images.show {
            display: block;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;
    document.head.appendChild(style); // Menambahkan style ke dalam head

    // Menambahkan elemen menu dan gambar utama
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const img = document.createElement('img');
    if (url2 === 'https://pola.rtp-tvonepkr.shop') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/TVONE.gif';
    } else if (url2 === 'https://es.rtp-sctvpkr.cam/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/SCTV.gif';
    }else if (url2 === 'https://id.rtp-metropkr.online/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/METROTVPOKER.gif';
    }else if (url2 === 'https://pola.rtp-nettvpkr.cyou/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/NETTV.gif';
    }else if (url2 === 'https://pro.rtp-pkhk.biz/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/POKERHOKIBET88.gif';
    }else if (url2 === 'https://pro.rtpyk-69.beauty/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/YUK69A.gif';
    }else if (url2 === 'https://t.ly/rtp-hoki777/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/HOKI.gif';
    }else if (url2 === 'https://es.pola-metrowin88.site/') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/METROWIN88.gif';
    }else if (url2 === 'https://t.ly/rtp-squad777') {
        img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/SQUAD777.gif';
    }
    img.alt = 'Click Me';
    img.id = 'clickImage';
    menuDiv.appendChild(img);

    // Menambahkan div untuk gambar tambahan
    const extraImagesDiv = document.createElement('div');
    extraImagesDiv.classList.add('extra-images');
    extraImagesDiv.id = 'extraImages';

    const img1 = document.createElement('img');
    img1.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/tele.gif';
    img1.alt = 'image1';
    const link1 = document.createElement('a');
    link1.href = url1;
    link1.target = '_blank';
    link1.appendChild(img1);
    extraImagesDiv.appendChild(link1);

    const img2 = document.createElement('img');
    img2.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/rtp.gif';
    img2.alt = 'image2';
    const link2 = document.createElement('a');
    link2.href = url2;
    link2.target = '_blank';
    link2.appendChild(img2);
    extraImagesDiv.appendChild(link2);

    
    const img3 = document.createElement('img');
    img3.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/wa.gif';
    img3.alt = 'image3';
    const link3 = document.createElement('a');
    link3.href = url3;
    link3.target = '_blank';
    link3.appendChild(img3);
    extraImagesDiv.appendChild(link3);

    menuDiv.appendChild(extraImagesDiv);
    document.body.appendChild(menuDiv);
    function loadExternalScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.onload = callback;
        script.onerror = function () {
            console.error(`Gagal memuat script dari ${src}`);
        };
        document.head.appendChild(script);
    }

    if (
        url2 === 'https://pola.rtp-tvonepkr.shop' ||
        url2 === 'https://es.rtp-sctvpkr.cam/' ||
        url2 === 'https://id.rtp-metropkr.online/' ||
        url2 === 'https://pola.rtp-nettvpkr.cyou/' ||
        url2 === 'https://pro.rtp-pkhk.biz/'
    ) {
        loadExternalScript('https://pokhok.biz/assets/menuDownload.js', function (){
        console.log('Script external berhasil dimuat!');
        });
    };

    // Fungsi untuk menambahkan interaktivitas
    img.addEventListener('click', function () {
        const extraImages = document.getElementById('extraImages');
        if (img.src.includes('clickhere.gif') || img.src.includes('TVONE.gif') || img.src.includes('SCTV.gif') || img.src.includes('METROTVPOKER.gif') || img.src.includes('NETTV.gif') || img.src.includes('POKERHOKIBET88.gif') || img.src.includes('clickhere8.gif')|| img.src.includes('HOKI.gif')|| img.src.includes('YUK69A.gif')|| img.src.includes('METROWIN88.gif')) {
            img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/close.gif';
            extraImages.classList.add('show');
        } else {
            if (url2 === 'https://pola.rtp-tvonepkr.shop') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/TVONE.gif';
            } else if (url2 === 'https://es.rtp-sctvpkr.cam/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/SCTV.gif';
            }else if (url2 === 'https://id.rtp-metropkr.online/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/METROTVPOKER.gif';
            }else if (url2 === 'https://pola.rtp-nettvpkr.cyou/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/NETTV.gif';
            }else if (url2 === 'https://pro.rtp-pkhk.biz/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/POKERHOKIBET88.gif';
            }else if (url2 === 'https://pro.rtpyk-69.beauty/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/YUK69A.gif';
            }else if (url2 === 'https://t.ly/rtp-hoki777/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/HOKI.gif';
            }else if (url2 === 'https://es.pola-metrowin88.site/') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/METROWIN88.gif';
            }else if (url2 === 'https://t.ly/rtp-squad777') {
                img.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/SQUAD777.gif';
            }
            extraImages.classList.remove('show');
        }
    });
}
