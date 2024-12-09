import React, { useEffect } from "react";
import "./styles.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";

function InstallationPage() {

    navigator.mediaDevices.getUserMedia({ audio: true })

    return (
        <div className="parent-div ">
      <div className="desktop--1-2240357 pos-abs">
        {/* Navigation bar1 */}
        <section className="navigation-bar-2241365 pos-abs">
          <div className="about-us-2241361 pos-abs">
            <span className="about-us-2241361-0">{`ABOUT US`}</span>
          </div>

          <div className="download-2241362 pos-abs">
            <span className="download-2241362-0">{`DOWNLOAD`}</span>
          </div>

          <div className="pricing-2241363 pos-abs">
            <span className="pricing-2241363-0">{`PRICING`}</span>
          </div>

          <div className="login-2241364 pos-abs">
            <span className="login-2241364-0">{`LOGIN`}</span>
          </div>
        </section>

        <div className="wind-spinner-de-2244382 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/4ab4/a1e5/1a73ae984843e9684cdd79ea06b9985f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELZy4sRc4hjuTcdWlbP9Kp9NKg7MDbfh67N1p-tLsGLkC~zKgvDm8T2MbCuBGt777xDdIBX3MjATE1ngaqTs1Jx99-H6M78m0VHxAzFIMEiPHL01GR1esfBChmvMssR~vo82tU92TypuMK5xQ3WdM2xOiFUN-oE75ZrhxaUTrCz8dZmjvYUM~sIvOasyBeowMu1HSs9wosA0v~Q7namRdwWCoHxxzjcGek5pJIjZdtFjNwOtoEfxTI9Rhh2X~QpbnyPShyzDzt3q6uz9GCh066mTqC47NGDJEvG~0pHJwoPXu7QqW1aX0h3KSEv7SJub~5rH8AWcIozqEqbFdMT37g__"
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-2244382 "
            alt="2244382-ALT"
          />{" "}
        </div>

        <div className="wind-spinner-de-2244380 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/4ab4/a1e5/1a73ae984843e9684cdd79ea06b9985f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELZy4sRc4hjuTcdWlbP9Kp9NKg7MDbfh67N1p-tLsGLkC~zKgvDm8T2MbCuBGt777xDdIBX3MjATE1ngaqTs1Jx99-H6M78m0VHxAzFIMEiPHL01GR1esfBChmvMssR~vo82tU92TypuMK5xQ3WdM2xOiFUN-oE75ZrhxaUTrCz8dZmjvYUM~sIvOasyBeowMu1HSs9wosA0v~Q7namRdwWCoHxxzjcGek5pJIjZdtFjNwOtoEfxTI9Rhh2X~QpbnyPShyzDzt3q6uz9GCh066mTqC47NGDJEvG~0pHJwoPXu7QqW1aX0h3KSEv7SJub~5rH8AWcIozqEqbFdMT37g__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244380 "
            alt="2244380-ALT"
          />{" "}
        </div>

        <div className="skypal-2243367 pos-abs">
          <span className="skypal-2243367-0">{`SkyPal`}</span>
        </div>

        <div className="navigating-the--2243368 pos-abs">
          <span className="navigating-the--2243368-0">{`Navigating the web is a breeze with your personal screen pet!`}</span>
        </div>

        <div className="convergentcloud-2243366 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/819c/c25d/70d953cb1624ca5088b3ba02601f74ff?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mql10qWvcgBPhrbObx4uxp7WadYRCGmWAvuMck0Kn5KWuIcx2U54QlnPdak1vciJfyFbI6RBJ6sOpIrsCdXTYIEAZ0XNLxdIhwAubAS-amKvcZxy3lmNfIYYWAN5KlZfOyzPJJ-cF34sitKyybI-I84LJRBTadPFWs6~2cFa~NK2EIBSdATKhJy5DfWG1YDJv4Nomn-yMrUkbihpaef3eP-R6coK7Lr2pe5qqWPQMPqVv0fSUre-oArGDpQmvbV6x2LZHMtf9zxImQbRqfmlN38ya2qlfSuJdB5z-4rHW8SI2B6xbcH9XSMs6wXoSrvXK2Vzgm5zJRlNkGzif9GOaA__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2243366 "
            alt="2243366-ALT"
          />{" "}
        </div>
        {/* Info1 */}
        <section className="info-2244375 pos-abs">
          <div className="what-is-skypal-2244369 pos-abs">
            <span className="what-is-skypal-2244369-0">{`What is `}</span>
            <span className="what-is-skypal-2244369-1">{`SkyPal?
`}</span>
          </div>

          <div className="skypal-is-an-in-2244370 pos-abs">
            <span className="skypal-is-an-in-2244370-0">{`SkyPal is an intuitive, on-screen assistant that provides interactive, step-by-step guidance for seamless web navigation and makes the Internet a safe space by safeguarding against cyber scams.
Simply download the Chrome extension and start asking questions today!
Click `}</span>
            <span className="skypal-is-an-in-2244370-1">{`here`}</span>
            <span className="skypal-is-an-in-2244370-2">{` to get started.`}</span>
          </div>

          <div className="features-2244374 pos-abs">
            <span className="features-2244374-0">{`Features`}</span>
          </div>

          <div className="easy-web-naviga-2244371 pos-abs"></div>

          <div className="rectangle-28-2244376 pos-abs">
            <div className="nodeBg-2244376 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="get-the-skypal--2244372 pos-abs">
            <span className="get-the-skypal--2244372-0">{`Get the`}</span>
            <span className="get-the-skypal--2244372-1">{` SkyPal`}</span>
            <span className="get-the-skypal--2244372-2">{` extension today for free!`}</span>
          </div>
        </section>

        <div className="untitleddesign3-2244383 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/897c/b3d2/9e14f1e935e06e9ab62e9d69408255ef?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0df7WC~DGyggCJubRieT1u-gM99eDblRb1NNgJssTKVrmOFZ2EtOdg~ZpeJBzKba6ZPD4lfN5xUoufDY3cKOtJEtcBrotcBa9ZsErACq2pZ8FGIwTsQdzzxwyrBN2sgRlpgTytwNDBWdcWz5MJJ2~xGRmdouw2CvrGreElxOK6QmF8xwSc~E1aSfAvfS6PDkuOHZV4ugtA7qlSHH0WaX9G8PP7vsl6H7WjqU9FwvUkI6Ewr-E1xA694WXrNoo-u5k69OvxaBcunHWhAJX9UF~E0swc-CKnSs5T7x8s3KMYMqDshuVum49Yqe-wLefobVOB4~YazuBawnErwiT3veQ__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244383 "
            alt="2244383-ALT"
          />{" "}
        </div>

        <div className="skypal-orange-2244391 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/bfb9/e72f/d926348c5f8b9a4f1f2d4e7101135e57?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjwoZBrGGlWQW-IAiCYw22ChqYfl43nSVJ320VLg5ceubL3hy5NN6kymUuqp6Jk2ZTK7umZFaFI70eyrhPEAXRxfEsiIDub6hDoPEds3Wcr0b3C0kYsfsceo8jrURW5Ic-yd5IZwk71AB~G2nI7rerx-ecLw2qNe5vUmIMrR4DY93W~Vd-IxPjPw~VOLPdzKDP5vQ~fPWYYae0pTam8WRU23Gc3WzhMUVrfsqt2pFFEEngm2sCnuUzeqJqxkQwmu8X9gKldPnC97MbulAdw6cKj95BPw5vsiEDZREs5OVVA7hUBfY2CVjcuvX2m-rnVllNaab8neW8L2gGTESGIX-A__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244391 "
            alt="2244391-ALT"
          />{" "}
        </div>

        <div className="untitleddesign2-2244381 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/be84/6948/0de9f09577c254684d2a993f26f61241?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAbvfeP7gcz8PYWbUXMiCVRLCb3Q3XlAXWreiehgNn-gJvKKj5KES~8VPGFKDxGwf4PqJktPsnHXYJ-8WtcgbKvT4Hb2b-BBPERdMb19BHhK4GITFJyj9wEdZdT6c7Hwa1lFIZxYIXbNffFD3nl0UhBM5U9YX92omejnDY4TDQjdgc6bV7WvNVEadOVj-Qa4Fjt9wQVM5hOXJOdtM7DPJzil23cEQFhY3oMXD267pITxm9VElyt6P5K3o-UvFYttcCDaitw4De7EvTC1iVSrUXMJ3nbWBbHty2X4QK3jZfmy~mEv~wJmSIZt3N3Rtsgmb6XfL5TW-u8i5OfRRMh1JQ__"
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-2244381 "
            alt="2244381-ALT"
          />{" "}
        </div>

        <div className="skypal-party-ha-2244385 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/2b52/c30b/4cf94d085e7c83bc00ca6bbe9fe2d281?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DAf~NOX88tosTKmLahJk8mncNaU7Y5i9sTAS70fjp7Ml2Clpvug~mWojKellLHU9dtsS2UrthpUidnsjTDmIXop6iD0Vb~9UxJyKB~SlQCfmRQx63ipL19dmFEmMdHxQazTtJ14dHRp9Yv-K2s-HPYROqfaPJPgqsyzrfu5Z9EN0v06JRquLbb0fjVWgvQIyH4-eXVaOH57~OSleFdhSNdbt3oBYfM1xaqM6zYNc4SEzcstmf4SOgwS05H0UL0eAu8YmEa378Mhgs9f2pV9KDCd-8aV6HD9XY~8-~q3y4Ans9MRNGw~q996qvN3rKFwemNpd2Ut6Qs~aTlyZTOptqw__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244385 "
            alt="2244385-ALT"
          />{" "}
        </div>

        <div className="noisygradients-224727 pos-abs"></div>

        <div className="skypal-closed-e-2244386 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/ee57/cfd3/43f28ead270723e07a95d5a92f6ba1bf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dp6DhaJfmyyhZ-4ayGqG6sAsaC5sxrlTS~06RrFRU1JVWtv~HDMgKUZhi5OHCZUtZf4Ymwp1gRjNcqAEgrWO0XPuNnr9zBHAwQIuzyzelKfQ2L1Bb8pzvqHqGG33ToAJSRTnjMV7hcR47FPLbOYMLoFzfi95R63vENU6G9z5nMxzohZokOL7FKxNnDYXZ8wIJr~v3gBHe46ZZoW-D6VsPG0nHkZ8gR9t2l4K5guvdBtldA4Jx5QqjSZ2zGUNRzrsflRvIuVGhWMqnu2PEKf7KSttYOcFszjobFFoaZrZSu2mERfWG0OGGfj4lqa3DgIDdTzbDyA1vntOO0oe5LMf2g__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244386 "
            alt="2244386-ALT"
          />{" "}
        </div>

        <div className="skypal-dark-blu-2244389 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/8a35/7e8e/0cb4fa3f6deb252622d5eb492ac2c25f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ddc-I6QrUlapTJSzZRONAzACTaWCVb-0t~n~RHmfeClxVBmSAEcIgh0UN5UyNesB-I4T~zG~GAd9fh~ea01USS~ciUSYLCt1uRK54cJxtX5HCgXH2jKEsLz21boHHayMBPlZUIcKIHdpi5quBlJtiFi7eDkEGJXw8TR2MKgAzM2VZK4eTiPqxK3z-BHuwpG8FcDTn0CXQewJnrqSyv1QA5MIWLdXI3JQ~5TAL0qK0OUJYc4o5f5Kl3eIt2DUsF-EWMJbAHBbkQrjndILVLMmdlkotazDIIS9USmIWCfRBEPGhc1FF-Pmz-gLiwF9sSe4witYYzemWZ8ZTOg9lfgPOw__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244389 "
            alt="2244389-ALT"
          />{" "}
        </div>

        <div className="skypal-green-2244387 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/9435/b22d/4a3fab95031cb6c13bc7f8aaf0379b97?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPaEfcvphH6tqiE1P-fY5sM3HELfyA16lRneqOMuIujS9jFn86Dlim20rTLAb7xmJnulbrHwdoZKAlUc4ZZRYSDlyHnmagCR33bvQ~SxBHexZk9fHrBpbripC~IIbVZBKWmy4p9Se7AX44ELGAMbGQ7WNBfef7XLq9i4-xNBbz~Fm8Yp3e-6UzR5~M8HBq2a9bi4lVcIVur9qokCRqE6lWHe5NdE3jUhk8ucLLn2UOJZ6bVMyBJcAOtp2dKapm85hBKeypizK~uR1~oWM5RnyyAlxpLmt0xvPmDNIobtPJ~TOOU~8V~~PeI9-WuPNr~XwMLXy6WiEfa~et75KQn3SA__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244387 "
            alt="2244387-ALT"
          />{" "}
        </div>

        <div className="skypal-yellow-2244390 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/0151/c0ed/b171d541db60077a6739332fd125fada?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W2VjfNYw680vrneGeCPPro0~Mp2NPGYCTQdhYJayZJX3bE55GuHeLnAAFVYUkaDlBI6BrvOpBHR6IJEXR1-9S~CbXMtVmpDGsHS1IDyWvUmyd0AijHRx~tURpD-KbMEnCXhVWyOUxyhiZspx1P8bixe8EUQlcBMUj2UiIWjLE4kxD5IXts2PH364lwfT9ggaFwVXMCChkbpT-ZYpoHefONmfDd2Rtd~SbVL08QSxGZj15ThQm8xMNsaGFpcequycHsclQ0HhMZwBfR~udyEoQPVu0WliyiOiw65DAOW59GjFL-~jYJmB5wUY0Wp2KKtJX1vd~HgXKzYt~NUCrQ-XKQ__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244390 "
            alt="2244390-ALT"
          />{" "}
        </div>

        <div className="skypal-lavender-2244388 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/d60e/04b3/20b7ec6b530b7689d80990561f433286?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNH--YGq7rdNoMUgNB6iSF~BpvHZLhmsOgxIHMHqn4ZmQEv9frKl9t6O2VXPvEpv2jwR9VDfc2ejtX6eWs1Fxge8UzS2lXPISkUAPpuFCq99VyyR3LkaJ4TtkqxxE7B3x1LN3FJgin~lSv~a6Ssqla6HX3PurnWv92vp9yRai8L57FroqkxFWuavp6LVLWJFsvOyOsSEmssqsk33ho9XKqb6YhII0vb1PD2kVxJa0-YPY0EpMHa8yDGqjz7k9NHT0p4UldPVrxwsUMo-uHWgKinMUaMBF6V8jwVQRNmFuXPpx48nJ1VhZqseAVAt4g3MSvAbay4v~0tj~cKgMeIyrA__"
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-2244388 "
            alt="2244388-ALT"
          />{" "}
        </div>
      </div>
    </div>
    )


}



export default InstallationPage; 