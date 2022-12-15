import MainLayout from "../../layouts/mainLayout";


const Checkout = () => {

    return (
        <MainLayout>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <div className="flex justify-between w-full">
                            <div>
                                <h3 className="text-2xl font-bold">Shopping Cart</h3>
                                <span>You have {0} items in Your Cart</span>
                            </div>
                            <div className="flex">
                                <input type="text" placeholder="Enter Coupon" className="input input-bordered" />
                                <button className="btn btn-primary">Apply</button>
                            </div>
                        </div>
                        <div className="shadow-lg mt-10 py-10">
                            <div className="flex justify-evenly w-full">
                                <div className="flex">
                                    <img src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw" alt="image"
                                        className="w-12 h-12 mx-10" />
                                    <div>
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="text-red-600">Price:  $20</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <div className="border border-orange-500  mb-96 p-3">
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




        </MainLayout>
    );
}

export default Checkout;