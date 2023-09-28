import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";



const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const PrivacySection = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
  
    <section id="about" className="pt-[150px] pb-[120px]">
    <div className="container">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">
          
         <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">Privacy Policy</h1>
           
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Last updated: 2023-09-01</p>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
                when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and
                use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the
                <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.
            </p>
            <h2 className="mb-2 mt-0 text-3xl font-bold leading-tight">Interpretation and Definitions</h2>
            
            <h2 className="mb-2 mt-0 text-3xl font-medium leading-tight">Interpretation</h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The words of which the initial letter is capitalized have meanings defined under the following conditions. The
                following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h2 className="mb-2 mt-0 text-3xl font-medium leading-tight">Definitions</h2>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">For the purposes of this Privacy Policy:</p> 
            <ul class="mb-10 list-inside list-disc text-body-color">
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Account</strong> means a unique account created for You to access our Service or parts of our
                      Service.</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                      &quot;Our&quot; in this Agreement) refers to VentureOS, 1201 N. Orange Street Suite 7160 Wilmington 19801 Delaware..</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device
                      by a website, containing the details of Your browsing history on that website among its many uses.</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Country</strong> refers to: , United States</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a
                      digital tablet.</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                  </p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Service</strong> refers to the Website.</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the
                      Company. It refers to third-party companies or individuals employed by the Company to facilitate the
                      Service, to provide the Service on behalf of the Company, to perform services related to the Service or to
                      assist the Company in analyzing how the Service is used.</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
                      Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Website</strong> refers to , accessible from <a href="ventureos.com"
                          rel="external nofollow noopener" target="_blank">ventureos.com</a></p>
              </li>
              <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
                      entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </li>
          </ul>
          <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">Collecting and Using Your Personal Data</h2>
          <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Types of Data Collected</h2>
          <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Personal Data</h3>
          <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be
    used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul class="mb-10 list-inside list-disc text-body-color">
        </ul>
        <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Usage Data</h3>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Usage Data is collected automatically when using the Service.</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type,
            browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those
            pages, unique device identifiers and other diagnostic data.</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">When You access the Service by or through a mobile device, We may collect certain information automatically,
            including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of
            Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device
            identifiers and other diagnostic data.</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service
            by or through a mobile device.</p>
        <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Tracking Technologies and Cookies</h3>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.
            Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and
            analyze Our Service. The technologies We use may include:</p>
            <ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct
        Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept
        Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so
        that it will refuse Cookies, our Service may use Cookies.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>Flash Cookies.</strong> Certain features of our Service may use local stored objects (or Flash Cookies)
        to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not
        managed by the same browser settings as those used for Browser Cookies. For more information on how You can
        delete Flash Cookies, please read &quot;Where can I change the settings for disabling, or deleting local shared
        objects?&quot; available at <a
            href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
            rel="external nofollow noopener"
            target="_blank">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files
        known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the
        Company, for example, to count users who have visited those pages or opened an email and for other related
        website statistics (for example, recording the popularity of a certain section and verifying system and server
        integrity).</li>
</ul>           
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal
    computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
    browser. Learn more about cookies: <a
        href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
        target="_blank">Cookies by PrivacyPolicies Generator</a>.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Necessary / Essential Cookies</strong></p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Type: Session Cookies</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Administered by: Us</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Purpose: These Cookies are essential to provide You with services available through the Website and to enable
            You to use some of its features. They help to authenticate users and prevent fraudulent use of user
            accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
            these Cookies to provide You with those services.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Type: Persistent Cookies</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Administered by: Us</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>Functionality Cookies</strong></p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Type: Persistent Cookies</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Administered by: Us</p>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
            your login details or language preference. The purpose of these Cookies is to provide You with a more
            personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
    </li>
</ul>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or
    the Cookies section of our Privacy Policy.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Use of Your Personal Data</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The Company may use Personal Data for the following purposes:</p>
<ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal
            Data You provide can give You access to different functionalities of the Service that are available to You
            as a registered user.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the
            purchase contract for the products, items or services You have purchased or of any other contract with Us
            through the Service.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of
            electronic communication, such as a mobile application's push notifications regarding updates or informative
            communications related to the functionalities, products or contracted services, including the security
            updates, when necessary or reasonable for their implementation.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>To provide You</strong> with news, special offers and general information about other goods, services
            and events which we offer that are similar to those that you have already purchased or enquired about unless
            You have opted not to receive such information.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger,
            divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our
            assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which
            Personal Data held by Us about our Service users is among the assets transferred.</p>
    </li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis,
            identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and
            improve our Service, products, services, marketing and your experience.</p>
    </li>
</ul>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We may share Your personal information in the following situations:</p>
<ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to
        monitor and analyze the use of our Service, to contact You.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with,
        or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of
        Our business to another company.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will
        require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other
        subsidiaries, joint venture partners or other companies that We control or that are under common control with
        Us.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>With business partners:</strong> We may share Your information with Our business partners to offer You
        certain products, services or promotions.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas
        with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg"><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your
        consent.</li>
</ul>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Retention of Your Personal Data</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy
    Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for
    example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our
    legal agreements and policies.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
    shorter period of time, except when this data is used to strengthen the security or to improve the functionality of
    Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Transfer of Your Personal Data</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Your information, including Personal Data, is processed at the Company's operating offices and in any other places
    where the parties involved in the processing are located. It means that this information may be transferred to — and
    maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where
    the data protection laws may differ than those from Your jurisdiction.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that
    transfer.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance
    with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country
    unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Disclosure of Your Personal Data</h2>
<h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Business Transactions</h3>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will
    provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Law enforcement</h3>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law
    or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h3 className="mb-2 mt-0 text-3xl font-medium leading-tight">Other legal requirements</h3>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Comply with a legal obligation</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Protect and defend the rights or property of the Company</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Prevent or investigate possible wrongdoing in connection with the Service</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Protect the personal safety of Users of the Service or the public</li>
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">Protect against legal liability</li>
</ul>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">Security of Your Personal Data</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet,
    or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your
    Personal Data, We cannot guarantee its absolute security.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">Children's Privacy</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
    information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has
    provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from
    anyone under the age of 13 without verification of parental consent, We take steps to remove that information from
    Our servers.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from
    a parent, We may require Your parent's consent before We collect and use that information.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">Links to Other Websites</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You
    will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You
    visit.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We have no control over and assume no responsibility for the content, privacy policies or practices of any third
    party sites or services.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">Changes to this Privacy Policy</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
    Policy on this page.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and
    update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
    effective when they are posted on this page.</p>
<h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">Contact Us</h2>
<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">If you have any questions about this Privacy Policy, You can contact us:</p>
<ul class="mb-10 list-inside list-disc text-body-color">
    <li class="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">By email: hello@ventureos.com</li>
</ul>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PrivacySection;
