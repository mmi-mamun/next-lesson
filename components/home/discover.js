import { GiSkills } from 'react-icons/gi';
import { GiDiamondTrophy } from 'react-icons/gi';
import { TbCoffeeOff } from 'react-icons/tb';

const Discover = () => {
    const discovers = [
        {
            icon: <GiSkills className='text-7xl' />,
            title: 'Practical Skills',
            description: 'Odio minima earum, deleniti culpa commodi sunt! Qui aliquam provident, ipsa itaque ipsum consectetur quos voluptatibus perferendis earum illum temporibus ratione.'
        },
        {
            icon: <GiDiamondTrophy className='text-7xl' />,
            title: 'Learn From The Best',
            description: 'Odio minima earum, deleniti culpa commodi sunt! Qui aliquam provident, ipsa itaque ipsum consectetur quos voluptatibus perferendis earum illum temporibus ratione.'
        },
        {
            icon: <TbCoffeeOff className="text-7xl" />,
            title: 'No Subscription Fees',
            description: 'Odio minima earum, deleniti culpa commodi sunt! Qui aliquam provident, ipsa itaque ipsum consectetur quos voluptatibus perferendis earum illum temporibus ratione.'
        }
    ]

    return (
        <div className="my-12 sm:my-24">
            <div className="text-center py-5 pb-12">
                <h2 className="text-3xl sm:text-5xl pb-5 font-semibold">What will You Discover?</h2>
                <p className="max-w-3xl px-3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum totam quisquam tenetur, atque quibusdam ratione ducimus suscipit dignissimos dolorem eos illum doloribus odit. In provident error eaque laborum asperiores!</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-3">
                {
                    discovers.map(({ icon, title, description }, i) => <div key={i} className="p-3">
                        <div className='flex justify-center'>{icon}</div>
                        <h3 className="text-primary font-semibold text-xl sm:text-2xl text-center py-3">{title}</h3>
                        <p>{description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Discover;