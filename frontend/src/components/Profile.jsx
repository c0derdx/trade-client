import React from 'react'
import Cover from './childComponents/Cover'
import ProfileFlex from './childComponents/ProfileFlex'

function Profile() {
    return (
        <>
            <Cover
                name="Profile"
            />
            <ProfileFlex/>
            <div className='mx-auto w-full mt-4 max-w-screen-lg form__container'>
                <h1 className='text-4xl leading-loose text-center'>Risk Profile</h1>
                <p className='text-center mb-8'>As Per SEBI Norms KYC is Mandatory for All Clients. After subscribing us, submit this KYC form. Without submitting this Agreement or KYC form your service will not start.</p>
                <iframe
                    src="https://9ghr0951wy5.typeform.com/to/cEzHysPO"
                    width="100%"
                    height="500"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    style={{ display: "inline-block" }}
                >
                    Loading...
                </iframe>
            </div>
        </>
    )
}

export default Profile