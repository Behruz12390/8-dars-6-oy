const s = document.querySelector('.s')
const form = document.querySelector('.form')
const inp = document.querySelector('.inp')

const getusers = async () => {
    const url = 'https://dummyjson.com/users'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        return await response.json()

    } catch (err) {
        return err.message
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const drawui = async () => {
        const users = await getusers()
        const filteru = users.users.filter(a => a.age > inp.value)
        for (const user of filteru) {
            const p = document.createElement('p');
            p.innerHTML += `<div class="j">
                <h1>Ism: ${user.firstName}</h1>
                <p>Email: ${user.email}</p>
                <p>Manzil: ${user.address.address}</p>
                <p>Yosh: ${user.age}</p>
                <p>Phone: ${user.phone}</p>
                <p>Tugilgan: ${user.birthDate}</p>
            </div>`;
            s.appendChild(p)
        }
    }
    drawui()
})
