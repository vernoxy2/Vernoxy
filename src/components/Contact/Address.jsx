import React from 'react';

const Address = () => {
  return (
    <div className=" py-7 md:py-10 container lg:px-0">
      <iframe
      data-aos="fade-up"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.1657484858708!2d72.95070284948687!3d20.592517038117713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3bdd46352cb%3A0xb318e29624cbcfa4!2sKALAJI%20BUSINESS%20CENTER!5e0!3m2!1sen!2sin!4v1755075997330!5m2!1sen!2sin"
        width="100%"
        className='h-[400px] md:h-[500px]'
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Address;
