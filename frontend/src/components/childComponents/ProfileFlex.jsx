import React from 'react'
import ProfileCard from './ProfileCard'

function ProfileFlex() {
    return (
        <div className='Profile__flex text-left max-w-screen-lg mx-auto'>
            <h1 className='text-2xl font-semibold py-4'>Investment Risk Profile</h1>
            <div>In setting up an investment portfolio suitable for you, your financial adviser will ask you a series of questions about your financial and lifestyle goals. Using this information, plus details of your current assets, liabilities and income, your adviser can determine what level of risk or exposure you are prepared to tolerate in relation to fluctuations in the marketplace - and the level that makes sense for your stage in life. From this, an appropriate mix of assets can be allocated to your investment portfolio.</div>
            <div className='flex justify-center items-center flex-wrap'>
                <ProfileCard
                title = "Very High Growth Investors (Above 200)"
                detail = "Your Investment portfolio should have bias toward high capital growth and you have little need for income. You are prepared to accept a more higher degree of volatility and risk.Your primary concern is to accumulate assets over medium to long term."
                />
                <ProfileCard
                title = "High Growth Investors (161-200)"
                detail = "Your Investment portfolio should have bias toward capital growth and you have little need for income. You are prepared to accept a higher degree of volatility and risk. Your primary concern is to accumulate assets over medium to long term."
                />
                <ProfileCard
                title = "Medium Growth Investor (81-160)"
                detail = "Your investment portfolio should have focus on capital growth with some need for income. You are ready to take calculated risk to achieve better returns"
                />
            </div>
            <div>The questionnaire returns a score on the basis of which you fall in either of the category mentioned above. This assessment is made solely on the basis of your financial situation and the answers selected by you. As your advisor, "I" and "YOU" confirm that we have worked together to determine your risk profile and the investment options that are best suited for your investment style.</div>
            <div>
            <h1 className='text-2xl font-semibold py-4'>Disclaimer & Terms</h1>
            <ul>
                <li className='leading-loose'>• Equitas Research Investment Advisor respects and values the right to privacy of each and every individual. By becoming clients you have a promise from our side that we shall remain loyal to all our clients and non clients whose information resides with us. This privacy policy of Equitas Research Investment Advisor applies to the currents clients as well as former clients.</li>
                <li className='leading-loose'>• Your information, whether public or private, will NOT be sold, rented, exchanged, transferred or given to any firm or individual for any reason without your consent.</li>
                <li className='leading-loose'>•Your information will be used SOLELY for providing the services to you for which you have subscribed to us and not for any other purposes.</li>
                <li className='leading-loose'>• Your information given to us represents your identity with us. If any changes are brought in any of the fields of which you have provided us the information, you shall bring it to our notice by either calling usor sending an email to us</li>
                <li className='leading-loose'>• By filling out this form you are agreeing the comply with and be bound by the following terms and conditions of use along with the terms and conditions posted on the website www.thecapitalgainer.in, which together with our privacy policy govern Equitas Research Investment Advisor relationship with you in relation to the website.</li>
                <li className='leading-loose'>• By signing the form above, you agree to provide us your valid mobile number. Also by providing your mobile number, you provide us the consent to call you on the number provided by you and send SMS on your mobile number. You provide your consent for us to use your mobile numbers even if it is registered on the National 'DO Not Disturb' registry.</li>
                <li className='leading-loose'>• Equitas Research Investment Advisor as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
            </ul>
            </div>
        </div>
    )
}

export default ProfileFlex