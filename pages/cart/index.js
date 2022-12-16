import { useEffect, useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import { RxCross2 } from 'react-icons/rx';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('next-lesson-cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, [])
    console.log(cart);

    return (
        <MainLayout>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <div className="flex flex-col-reverse sm:flex-row gap-5 sm:justify-between w-full">
                            <div>
                                <h3 className="text-2xl font-bold">Shopping Cart</h3>
                                <span>You have {0} items in Your Cart</span>
                            </div>
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered" />
                                    <button className="btn btn-square btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {
                            cart.map(({ title, img, fee, description }, i) => <div key={i}
                                className="max-h-36 shadow-lg mt-10 rounded-lg flex justify-between items-center"
                            >
                                <img className="h-full rounded-l-lg" src={img} alt="image" />
                                <div className="self-start p-5">
                                    <h2 className="text-xl font-bold pb-3">{title}</h2>
                                    <p className="text-sm">{description.slice(0, 100)}</p>
                                </div>
                                <div className="text-3xl px-5 font-semibold text-primary">${fee}</div>
                                <RxCross2 className="text-5xl mr-5 hover:bg-neutral/10 active:bg-neutral/20 rounded-md cursor-pointer" />
                            </div>)
                        }

                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <div className="border border-orange-500  mb-96 p-8 rounded-lg">
                                <h2 className="text-xl font-bold">Order Summary</h2>
                                <div className="flex justify-between mt-4">
                                    <h2>Original Price: </h2>
                                    <p>{99}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h2>Coupon: </h2>
                                    <p>{29}</p>
                                </div>
                                <hr className="h-1 my-5 dark:bg-gray-700" />
                                <div className="flex justify-between">
                                    <h2>Total: </h2>
                                    <p>{60}</p>
                                </div>
                                <button className="btn btn-primary w-full justify-center mt-5">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Cart;