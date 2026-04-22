// Program

require('dotenv').config();

async function ambilData() {
    try {
        const respon = await fetch(process.env.BASE_API, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!respon.ok) { throw new Error(); }
            const data = await respon.json();
            console.log(data.joke);
    } catch (error) {
        console.error('Gagal mengambil data:', error);
    }
}

ambilData();