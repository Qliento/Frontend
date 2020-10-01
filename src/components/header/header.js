import React from "react"
import st from './header.module.css';

const Header = () => (
    <nav className={st.header}>
        <svg width="61" height="70" viewBox="0 0 61 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.5097 63.7984C47.1002 63.9986 46.6953 64.2078 46.2814 64.3991C44.8307 65.0756 43.4111 65.8499 41.9069 66.3973C38.7161 67.5436 35.367 68.1891 31.9787 68.3108C30.608 68.3108 29.2374 68.4488 27.8712 68.3998C26.323 68.4161 24.7774 68.2669 23.2609 67.9548C22.1928 67.6833 21.0847 67.5543 20.0434 67.2116C18.5809 66.7342 17.1484 66.1695 15.7535 65.5206C14.7615 65.0362 13.8208 64.4532 12.9455 63.7806C11.7962 62.9497 10.7077 62.0381 9.68795 61.0527C8.77644 60.0909 7.92627 59.0727 7.14247 58.0043C6.04562 56.4974 5.08929 54.8931 4.28548 53.2115C3.92263 52.4747 3.61184 51.7133 3.3554 50.933C2.95489 49.8205 2.55438 48.708 2.22507 47.5643C1.65158 45.703 1.22309 43.8 0.943427 41.8726C0.72092 40.1637 0.44056 38.4638 0.253654 36.7505C0.142401 35.7536 0.146855 34.739 0.111253 33.7288C0.0667521 32.5228 0.0222507 31.3168 0 30.1108C0 29.6925 0.093451 29.2742 0.102351 28.8515C0.124602 27.5787 0.102352 26.306 0.151303 25.0332C0.200255 23.9163 0.324859 22.8082 0.458364 21.6823C0.640819 20.1292 0.836622 18.5672 1.08138 17.0274C1.25049 15.9594 1.5264 14.9047 1.74445 13.8456C1.92691 13.0045 2.10491 12.1634 2.31852 11.3313C2.57663 10.3433 2.86589 9.36431 3.13735 8.38083C3.71183 6.31396 4.39513 4.27889 5.18441 2.28414C5.34016 1.89252 5.53597 1.52316 5.71397 1.1449C5.89198 0.766641 7.19142 0.464034 7.71209 0.757743C9.57854 1.84866 11.354 3.08833 13.0211 4.4647C13.613 4.94087 14.2048 5.41259 14.8012 5.86205C14.8716 5.89167 14.9472 5.90692 15.0237 5.90692C15.1001 5.90692 15.1757 5.89167 15.2462 5.86205C16.8349 5.36364 18.4013 4.78957 20.0078 4.36236C21.4054 4.00748 22.8211 3.7282 24.2488 3.52573C25.2768 3.36997 26.327 3.32547 27.3639 3.27207C28.6989 3.20977 30.034 3.12077 31.3468 3.16527C33.156 3.21141 34.9612 3.35998 36.7537 3.61028C38.603 3.88262 40.4351 4.26151 42.2407 4.74506C43.2642 5.02097 44.2744 5.35917 45.2846 5.68403C45.4472 5.75278 45.6261 5.77382 45.8003 5.74466C45.9744 5.7155 46.1367 5.63736 46.2681 5.51938C48.0481 4.08644 49.8593 2.6802 51.6616 1.27396C52.1067 0.926849 52.5517 0.58863 52.9967 0.26377C53.1389 0.133227 53.3157 0.0465538 53.506 0.0141835C53.6963 -0.0181867 53.8918 0.00512382 54.0692 0.0813131C54.2537 0.131037 54.4433 0.159408 54.6343 0.165867C54.9636 0.975792 55.3419 1.81241 55.6401 2.68019C56.0851 3.98853 56.5301 5.31022 56.8995 6.64527C57.3178 8.08711 57.6827 9.54676 58.052 11.002C58.2834 11.9142 58.4971 12.831 58.6929 13.7521C58.951 14.967 59.1868 16.1908 59.4093 17.4101C59.6318 18.6295 59.8543 19.7821 60.0234 20.9703C60.1658 21.8603 60.2771 22.7503 60.375 23.6403C60.5441 25.2557 60.731 26.8711 60.8423 28.491C60.9402 29.8572 60.9491 31.2323 60.9802 32.6029C60.9802 33.5909 61.0247 34.5832 60.9802 35.5712C60.8931 37.9149 60.6747 40.2519 60.3261 42.5712C60.0603 44.1972 59.7127 45.8087 59.2847 47.3996C59.013 48.4469 58.662 49.4719 58.2345 50.4658C57.6108 51.9858 56.8884 53.4635 56.0717 54.8892C55.1926 56.2446 54.2295 57.5436 53.188 58.7786C52.7097 59.3103 52.1968 59.8098 51.6527 60.2739L51.5415 60.4296L51.4347 60.5186C51.3487 60.5486 51.2688 60.5938 51.1988 60.6521C51.016 60.9076 50.812 61.1472 50.5892 61.3686C49.8994 61.9204 49.174 62.4277 48.4709 62.9618C48.1371 63.2377 47.8301 63.5269 47.5097 63.7984ZM30.0918 17.2766C29.9255 16.9771 29.727 16.6966 29.5 16.44C28.5223 15.5239 27.4232 14.7467 26.2336 14.1304C24.4592 13.2258 22.5097 12.7172 20.5196 12.6396C18.355 12.5455 16.1997 12.9747 14.2364 13.8908C12.273 14.8069 10.5595 16.1829 9.24108 17.9022C7.92269 19.6215 7.03831 21.6333 6.66291 23.7671C6.28751 25.9009 6.43217 28.0938 7.08462 30.1598C7.5925 31.8322 8.44948 33.3778 9.59894 34.6945C10.2865 35.5039 11.061 36.2351 11.9086 36.8751C14.1799 38.5474 16.9161 39.4699 19.7364 39.514C20.6405 39.5025 21.5429 39.4312 22.4376 39.3004C24.0481 39.0656 25.5905 38.4923 26.9634 37.6182C25.9221 35.6068 24.7383 33.7199 23.7148 31.7084C25.2011 32.1535 26.5851 32.5985 27.9869 32.9634C29.9672 33.5019 31.9164 33.2571 33.8477 32.6563C34.6443 32.4071 35.4498 32.1757 36.2553 31.9488C36.4134 31.9382 36.5722 31.9501 36.727 31.9843L33.6831 37.6494C39.0232 41.0137 47.5097 40.0391 51.893 33.395C53.7056 30.6314 54.4287 27.2937 53.9223 24.0277C53.4159 20.7617 51.7161 17.7996 49.1518 15.7146C43.8517 11.3135 35.6501 11.4203 30.0918 17.2766Z" fill="#76B73E" />
            <path d="M47.5095 63.7984C47.8299 63.5269 48.137 63.2377 48.4708 62.9796C49.1739 62.4455 49.8993 61.9382 50.589 61.3864C50.8119 61.1651 51.0158 60.9254 51.1987 60.6699C51.2686 60.6116 51.3485 60.5664 51.4345 60.5364C51.301 60.7634 51.4701 60.8568 51.6214 60.9815C52.8541 61.7869 54.0512 62.6503 55.3284 63.3756C55.4848 63.4932 55.6156 63.6413 55.7131 63.8109C55.8106 63.9805 55.8726 64.1681 55.8955 64.3623C55.9184 64.5566 55.9016 64.7535 55.8462 64.9411C55.7908 65.1287 55.6979 65.3032 55.5732 65.4538C54.4117 66.5219 53.2635 67.6077 52.0976 68.6757C51.962 68.8121 51.796 68.9145 51.6132 68.9745C51.4304 69.0345 51.2361 69.0504 51.046 69.0208C50.8559 68.9913 50.6755 68.9173 50.5195 68.8047C50.3635 68.6921 50.2364 68.5442 50.1484 68.3731C49.3875 67.0381 48.631 65.703 47.8655 64.368C47.7587 64.1499 47.6297 63.9764 47.5095 63.7984Z" fill="#1B8E3D" />
            <path d="M51.5415 60.4474L51.6528 60.2917L51.5415 60.4474Z" fill="#1B8E3D" />
            <path d="M30.0918 17.2767C35.65 11.4203 43.8516 11.3135 49.1517 15.7147C51.7161 17.7997 53.4159 20.7617 53.9223 24.0277C54.4286 27.2937 53.7056 30.6314 51.893 33.3951C47.5096 40.0391 39.0098 41.0137 33.683 37.6494L36.7269 31.9844C36.5722 31.9502 36.4133 31.9382 36.2552 31.9488C35.4497 32.1757 34.6443 32.3938 33.8477 32.6563C31.9163 33.2571 29.9672 33.5019 27.9869 32.9634C26.5851 32.5807 25.2011 32.149 23.7147 31.7085C24.7338 33.7199 25.9398 35.6068 26.9633 37.6182C25.5905 38.4923 24.048 39.0656 22.4375 39.3004C21.5428 39.4312 20.6404 39.5025 19.7363 39.514C16.9161 39.4699 14.1798 38.5474 11.9085 36.8751C11.061 36.2352 10.2864 35.5039 9.59889 34.6945C8.44942 33.3778 7.59244 31.8322 7.08456 30.1598C6.43751 28.094 6.29684 25.9028 6.67444 23.7712C7.05203 21.6396 7.93681 19.6301 9.25411 17.9122C10.5714 16.1944 12.2826 14.8186 14.2433 13.9009C16.2039 12.9832 18.3566 12.5506 20.5195 12.6396C22.5051 12.7191 24.4499 13.2277 26.2202 14.1304C27.4098 14.7467 28.5089 15.5239 29.4866 16.44C29.7183 16.6959 29.9213 16.9765 30.0918 17.2767ZM25.5927 26.9112C25.5215 24.0409 24.4668 21.7135 22.0326 20.1737C20.6824 19.3175 19.0979 18.9056 17.5017 18.9958C15.9054 19.0859 14.3775 19.6737 13.1323 20.6766C12.1873 21.4061 11.4433 22.3639 10.97 23.4599C10.4967 24.5559 10.3097 25.7543 10.4266 26.9424H12.9231C12.8544 25.6395 13.2846 24.3593 14.1261 23.3624C14.9677 22.3654 16.1575 21.7264 17.4534 21.5755C18.1611 21.5013 18.8766 21.5823 19.5499 21.8128C20.2231 22.0434 20.838 22.418 21.3517 22.9105C21.9114 23.4052 22.3436 24.0275 22.6117 24.7247C22.8797 25.4219 22.9757 26.1735 22.8914 26.9157L25.5927 26.9112ZM49.748 26.9112C49.791 26.7658 49.8207 26.6169 49.837 26.4662C49.8949 24.8105 49.3475 23.1905 48.2973 21.9093C47.1486 20.4009 45.4526 19.405 43.5757 19.1368C41.4441 18.8654 39.5038 19.1991 37.7371 20.503C36.2725 21.6085 35.2449 23.1955 34.8356 24.9843C34.731 25.6314 34.6907 26.2873 34.7155 26.9424H37.1986C37.4212 23.4401 39.5038 21.9004 41.6488 21.6022C42.8527 21.429 44.077 21.7271 45.0665 22.4344C46.6507 23.5247 47.2916 25.1044 47.2916 26.9246L49.748 26.9112Z" fill="white" />
            <path d="M25.5927 26.9112H22.8959C22.9801 26.169 22.8841 25.4174 22.6161 24.7202C22.3481 24.023 21.9159 23.4007 21.3562 22.906C20.8425 22.4135 20.2276 22.0389 19.5543 21.8084C18.881 21.5778 18.1656 21.4968 17.4578 21.571C16.1619 21.7219 14.9722 22.3609 14.1306 23.3579C13.289 24.3549 12.8589 25.635 12.9276 26.9379H10.4311C10.3142 25.7498 10.5011 24.5514 10.9744 23.4554C11.4477 22.3594 12.1918 21.4016 13.1367 20.6721C14.3819 19.6692 15.9099 19.0814 17.5061 18.9913C19.1024 18.9011 20.6868 19.313 22.037 20.1692C24.4668 21.7134 25.5215 24.0408 25.5927 26.9112Z" fill="#1B8E3D" />
            <path d="M49.7479 26.9157H47.3003C47.2692 25.0822 46.6462 23.5158 45.0753 22.4255C44.0857 21.7182 42.8614 21.4201 41.6576 21.5933C39.4948 21.9003 37.4121 23.4401 37.2074 26.9334H34.6753C34.6505 26.2784 34.6908 25.6225 34.7954 24.9754C35.2048 23.1866 36.2323 21.5996 37.6969 20.4941C39.477 19.1902 41.4039 18.8565 43.5355 19.1279C45.4239 19.3961 47.1294 20.4009 48.2794 21.9226C49.3296 23.2039 49.8769 24.8239 49.8191 26.4795C49.8081 26.6267 49.7843 26.7726 49.7479 26.9157Z" fill="#1B8E3D" />
            <path d="M30.51 43.8573C30.51 43.8573 28.325 40.0747 26.9499 37.6271C25.9086 35.6157 24.7248 33.7288 23.7013 31.7173C25.1876 32.1624 26.5716 32.6074 27.9734 32.9723C29.9537 33.5108 31.9029 33.266 33.8343 32.6652C34.6308 32.416 35.4363 32.1846 36.2418 31.9577C36.3999 31.9471 36.5587 31.9591 36.7135 31.9933L33.6696 37.6583L30.51 43.8573Z" fill="#1B8E3D" />
            <path d="M13.6664 46.0957C13.6664 46.0957 15.0949 52.3615 18.21 52.3615C21.3251 52.3615 22.3441 46.0779 22.3441 46.0779C22.3441 46.0779 20.1903 50.1543 18.21 50.1543C16.2297 50.1543 13.6664 46.0957 13.6664 46.0957Z" fill="white" />
            <path d="M25.8864 55.1384C25.8864 55.1384 27.3148 61.4265 30.421 61.4265C33.5272 61.4265 34.5552 55.1384 34.5552 55.1384C34.5552 55.1384 32.4014 59.2192 30.421 59.2192C28.4407 59.2192 25.8864 55.1384 25.8864 55.1384Z" fill="white" />
            <path d="M46.6017 46.0957C46.6017 46.0957 45.1732 52.3615 42.067 52.3615C38.9608 52.3615 37.9329 46.0779 37.9329 46.0779C37.9329 46.0779 40.0867 50.1543 42.067 50.1543C44.0473 50.1543 46.6017 46.0957 46.6017 46.0957Z" fill="white" />
        </svg>

        <div className={st.navbar}>
            <span>Новости</span>
            <span>О нас</span>
            <span>Блог</span>
            <span>Стать партнёром</span>
            <span>Маркет исследований</span>
            <span>Продать исследования</span>
        </div>
        <div className={st.local_basket}>
            <div className={st.localiz}>
                <span>Кыр</span>
                <span>Рус</span>
                <span>Eng</span>
            </div>
            <div className={st.basket}>
                <span>Корзина</span>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6272 18.0609C10.6272 19.0699 9.80917 19.8879 8.80012 19.8879C7.79106 19.8879 6.97308 19.0699 6.97308 18.0609C6.97308 17.0518 7.79107 16.2338 8.80013 16.2338C9.80919 16.2338 10.6272 17.0518 10.6272 18.0609ZM16.198 16.2338C15.1889 16.2338 14.3709 17.0518 14.3709 18.0609C14.3709 19.0699 15.1889 19.8879 16.198 19.8879C17.207 19.8879 18.025 19.0699 18.025 18.0609C18.025 17.0518 17.207 16.2338 16.198 16.2338ZM21.8693 7.6569L19.6211 14.3389C19.6211 14.3389 19.435 15.3305 18.4868 15.3305C17.5387 15.3305 8.26626 15.3305 7.13472 15.3305C6.00318 15.3305 5.95563 14.0876 5.95563 14.0876C5.95563 14.0876 4.74938 5.13844 4.68961 4.59779C4.62983 4.05714 3.93842 3.65642 3.93842 3.65642L0.963524 2.26678C-0.665194 1.41507 0.0751293 -0.205503 0.963524 0.166701C4.73579 1.9462 6.48813 2.82237 6.60088 3.5233C6.71498 4.22559 6.9133 5.9168 6.9133 5.9168V5.92766C6.9364 5.92087 6.9527 5.9168 6.9527 5.9168C6.9527 5.9168 18.5208 5.9168 20.8573 5.9168C22.5362 5.9168 21.8693 7.65962 21.8693 7.6569ZM18.6173 11.3776L18.5942 11.3789H7.58843L7.81528 13.1774H18.0821L18.6173 11.3776ZM19.689 7.75064H7.13336L7.37516 9.67277C9.7836 9.67277 16.8364 9.67277 19.1212 9.67277L19.689 7.75064Z" fill="#090509" />
                </svg>
            </div>
        </div>
        <div className={st.vertical_line}></div>
        <div className={st.regisration}>
            <button className={st.Lk}>личный кабинет</button>
            <button className={st.regisrationBtn}>Регистрация</button>
        </div>
    </nav>
)

export default Header;