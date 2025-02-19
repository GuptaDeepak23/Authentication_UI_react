import React from 'react';
import vector from '../../Assests/LoginPage_vector/Vector.png';
import vector_1 from '../../Assests/LoginPage_vector/Vector (1).png';
import vector_2 from '../../Assests/LoginPage_vector/Vector (2).png';
import vector_3 from '../../Assests/LoginPage_vector/Vector (3).png';
import vector_4 from '../../Assests/LoginPage_vector/Vector (4).png';
import vector_5 from '../../Assests/LoginPage_vector/Vector (5).png';
import group from '../../Assests/LoginPage_vector/Group.png';
import group_1 from '../../Assests/LoginPage_vector/Group (1).png';

const LoginPromotion = () => {
    return (
        <div className="w-[400px] h-[420px] bg-transparent flex flex-col items-center justify-center relative mx-auto mt-1">
         
            <div className="text-center text-black z-10 absolute">
                <div className="relative w-[150px] h-auto">
                    <h1 className="w-[280px] text-start text-5xl font-roboto font-extrabold leading-[1] whitespace-pre-wrap absolute left-[-95px] bottom-[18px]">
                        Schedule <br /> Posts <br /> And Monitor Success
                    </h1>
                </div>
                <span className="absolute left-20 top-7 text-left font-roboto w-40">
                    Manage all social media in one place
                </span>
                <p className="-rotate-90 absolute left-[200px] top-5 text-xs">
                    www.socialrepeat.com
                </p>

                {/* Footer Section */}
                <div className="footer">
                    <p className="absolute top-[180px] right-[5px] w-[290px] text-xs font-roboto">
                        #socialmedia #customhashtag #latesttrend
                    </p>
                    <hr className="w-[80px] absolute top-[170px] left-[175px] border-black" />
                    <p className="absolute top-[180px] right-[-90px] text-sm font-semibold">
                        Try now {'>'}
                    </p>
                </div>
            </div>

            {/* Background Box */}
            <div className="w-[200px] h-[250px] bg-customBlue absolute top-12 left-[148px] z-0"></div>

            {/* Vector Images */}
            <div className="vector_images">
                <img src={vector} className="absolute right-0 top-5 " alt="vector" />
                <img src={vector_1} className="absolute left-20 top-[217px]" alt="vector" />
                <img src={vector_2} className="absolute right-52 top-[260px]" alt="vector" />
                <img src={vector_3} className="absolute left-0 top-52" alt="vector" />
                <img src={vector_4} className="absolute right-44 top-[75px]" alt="vector" />
                <img src={vector_5} className="absolute right-36 top-[65px]" alt="vector" />
                <img src={group} className="absolute top-4 left-0" alt="group" />
                <img src={group_1} className="absolute top-12 right-6" alt="group" />
            </div>
        </div>
    );
};

export default LoginPromotion;
