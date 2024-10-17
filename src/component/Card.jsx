import React from 'react'
import item1 from '../assets/products-rightview.jpg'
import item2 from '../assets/8th 1.jpg'
import item3 from '../assets/8th 2.jpg'
import item4 from '../assets/8th 3.jpg'
import item5 from '../assets/item5.webp'
import item6 from '../assets/item6.jpg'
import item7 from '../assets/item7.jpg'
import item8 from '../assets/item8.jpg'
import item9 from '../assets/item9.jpg'
import item10 from '../assets/item10.webp'

export default function Card() {
    return (
        <div>
            <div className="heading text-center  mb-10 gap-5 flex flex-col">
                <h1 className='text-6xl'>Our Products</h1>
                <h2 className='text-3xl'>Are you hungry ! Just click and order your best food</h2>
            </div>


            <div className="align-middle grid grid-cols-4 gap-3 mb-10">

                <div>
                    <div className=" cr card glass w-96">
                        <figure>
                            <img src={item1} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item2} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item3} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item4} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item5} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item6} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item7} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item8} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item9} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cr card glass w-96">
                        <figure>
                            <img src={item10} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Margherita Pizza</h2>
                            <p class=" mb-4">A classic Italian pizza with fresh tomatoes, mozzarella, and basil.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
