import React from "react";
import Image from "next/image";
import dashboardLayout from "/src/assets/images/dashboard-logo.png";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="side-nav-container">
      <div className="sideNav">
        <div className="logo-container">
          <div className="img-container">
            <Link href="/">
              <Image src={dashboardLayout} priority={true} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="sideNav-menu">
          <ul className="list-unstyled d-flex flex-column p-0 m-0">
            <li className="main-menu active">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M0.549383 5.65816L5.29 0.914064C5.87673 0.328706 6.67146 0 7.5 0C8.32854 0 9.12328 0.328706 9.71 0.914064L14.4506 5.65816C14.6254 5.83187 14.7639 6.03857 14.8582 6.26626C14.9525 6.49395 15.0007 6.73811 15 6.98457V13.1239C15 13.6215 14.8024 14.0987 14.4508 14.4505C14.0992 14.8023 13.6223 15 13.125 15H1.87501C1.37773 15 0.900813 14.8023 0.549183 14.4505C0.197553 14.0987 8.58307e-06 13.6215 8.58307e-06 13.1239V6.98457C-0.000693321 6.73811 0.0475054 6.49395 0.14181 6.26626C0.236115 6.03857 0.374649 5.83187 0.549383 5.65816ZM5.625 13.7493H9.375V11.289C9.375 10.7914 9.17745 10.3142 8.82582 9.96241C8.47419 9.61057 7.99728 9.4129 7.5 9.4129C7.00272 9.4129 6.52581 9.61057 6.17418 9.96241C5.82255 10.3142 5.625 10.7914 5.625 11.289V13.7493ZM1.25001 13.1239C1.25001 13.2897 1.31586 13.4488 1.43306 13.5661C1.55027 13.6834 1.70925 13.7493 1.87501 13.7493H4.375V11.289C4.375 10.4597 4.70424 9.6644 5.29029 9.07799C5.87634 8.49159 6.6712 8.16216 7.5 8.16216C8.3288 8.16216 9.12366 8.49159 9.70971 9.07799C10.2958 9.6644 10.625 10.4597 10.625 11.289V13.7493H13.125C13.2908 13.7493 13.4497 13.6834 13.5669 13.5661C13.6841 13.4488 13.75 13.2897 13.75 13.1239V6.98457C13.7494 6.81884 13.6836 6.66 13.5669 6.54243L8.82625 1.80022C8.47394 1.44934 7.99708 1.25236 7.5 1.25236C7.00292 1.25236 6.52606 1.44934 6.17375 1.80022L1.43313 6.54431C1.31683 6.66141 1.25108 6.81949 1.25001 6.98457V13.1239Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </span>
                <span className="menu-label">Dashboard</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_48_14)">
                      <path
                        d="M11.875 1.25H11.25V0.625C11.25 0.28 10.97 0 10.625 0C10.28 0 10 0.28 10 0.625V1.25H5V0.625C5 0.28 4.72 0 4.375 0C4.03 0 3.75 0.28 3.75 0.625V1.25H3.125C1.40188 1.25 0 2.65188 0 4.375V11.875C0 13.5981 1.40188 15 3.125 15H11.875C13.5981 15 15 13.5981 15 11.875V4.375C15 2.65188 13.5981 1.25 11.875 1.25ZM3.125 2.5H11.875C12.9087 2.5 13.75 3.34125 13.75 4.375V5H1.25V4.375C1.25 3.34125 2.09125 2.5 3.125 2.5ZM11.875 13.75H3.125C2.09125 13.75 1.25 12.9087 1.25 11.875V6.25H13.75V11.875C13.75 12.9087 12.9087 13.75 11.875 13.75ZM10.2481 9.595C10.2481 9.83187 10.0831 10.0312 9.89437 10.1363L8.91687 10.68L9.35063 11.8631C9.43437 12.0925 9.35875 12.3494 9.16375 12.4963C8.96437 12.6462 8.68937 12.6444 8.49187 12.4919L7.51937 11.74L6.54688 12.4919C6.34938 12.6444 6.07437 12.6462 5.875 12.4963C5.68 12.3494 5.60437 12.0925 5.68812 11.8631L6.12187 10.68L5.14437 10.1363C4.95563 10.0312 4.79063 9.83187 4.79063 9.595C4.79063 9.39437 4.965 9.1725 5.2475 9.1725H6.65187L7.02437 7.74562C7.08313 7.51937 7.28625 7.36188 7.51937 7.3575C7.7525 7.36188 7.95563 7.51937 8.01437 7.74562L8.38688 9.1725H9.79125C10.0738 9.1725 10.2481 9.39375 10.2481 9.595Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_14">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Create Event</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <path
                      d="M2.20831 11.25H13.4583C14.4939 11.25 15.3333 10.4106 15.3333 9.375V6.92375L14.6483 6.92563C13.9608 6.9075 13.4071 6.3425 13.4071 5.65063C13.4071 4.95875 13.9596 4.395 14.6458 4.37563L15.3333 4.3775V1.875C15.3333 0.839375 14.4939 0 13.4583 0H2.20831C1.17269 0 0.333313 0.839375 0.333313 1.875V4.375H0.888313C1.51144 4.375 2.08956 4.79938 2.19081 5.41375C2.31956 6.19625 1.71706 6.875 0.958313 6.875H0.333313V9.375C0.333313 10.4106 1.17269 11.25 2.20831 11.25ZM13.4583 10H2.20831C1.86331 10 1.58331 9.72 1.58331 9.375V8.04625C2.66019 7.76812 3.45831 6.78813 3.45831 5.625C3.45831 4.46187 2.66019 3.4825 1.58331 3.20375V1.875C1.58331 1.53 1.86331 1.25 2.20831 1.25H13.4583C13.8033 1.25 14.0833 1.53 14.0833 1.875V3.19687C12.9789 3.46687 12.1571 4.46438 12.1571 5.65063C12.1571 6.83688 12.9789 7.83437 14.0833 8.10437V9.375C14.0833 9.72 13.8033 10 13.4583 10Z"
                      fill="white"
                      fillOpacity="0.7"
                    />
                  </svg>
                </span>
                <span className="menu-label">All Event</span>
              </div>
            </li>

            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_48_23)">
                      <path
                        d="M7.59973 7.81667C7.51808 7.87022 7.42682 7.89597 7.33609 7.89597C7.17983 7.89597 7.0267 7.82007 6.93492 7.67991C6.78905 7.45841 6.85016 7.1607 7.07167 7.01487C8.09213 6.34306 8.6363 5.59894 8.78398 4.6739C8.8521 4.23918 8.76163 3.57932 8.40076 3.15763C8.16678 2.88439 7.85815 2.75127 7.457 2.75127C6.67026 2.75127 6.34838 3.31 6.22646 3.64277C5.93189 4.44562 6.17498 5.44505 6.79116 5.96684C6.99368 6.13843 7.01864 6.44132 6.84759 6.64334C6.676 6.84613 6.37337 6.87109 6.17109 6.69976C5.24786 5.91824 4.89218 4.49373 5.32508 3.31258C5.67399 2.36023 6.47113 1.79163 7.45703 1.79163C8.13613 1.79163 8.71487 2.04823 9.13061 2.53363C9.72989 3.23483 9.82946 4.20487 9.73223 4.82389C9.47791 6.41533 8.39323 7.29409 7.59973 7.81667Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M3.81921 12.2488H10.6739C10.6565 10.0989 10.5236 9.46035 10.4641 9.282C10.3331 8.88967 9.79463 8.48615 9.32326 8.22254C8.89738 8.89333 8.22115 9.29319 7.4695 9.29319H7.46924C6.72618 9.29293 6.05566 8.89333 5.63186 8.22281C5.16049 8.48644 4.62283 8.88996 4.49205 9.28177C4.32304 9.78952 4.33268 10.5035 4.34047 11.077C4.34203 11.1948 4.34361 11.3071 4.34361 11.4114C4.34361 11.6766 4.12884 11.8913 3.86365 11.8913C3.59847 11.8913 3.3837 11.6766 3.3837 11.4114C3.3837 11.3113 3.38215 11.2034 3.3806 11.09C3.37148 10.4439 3.36032 9.64005 3.5813 8.97785C3.94372 7.89159 5.48158 7.21459 5.65577 7.141C5.77433 7.09055 5.90848 7.09006 6.02756 7.13995C6.14665 7.18987 6.24049 7.28528 6.28833 7.40487C6.52076 7.98595 6.96222 8.33305 7.46921 8.33305C7.46948 8.33305 7.46948 8.33305 7.46948 8.33305C7.97905 8.33305 8.43767 7.97737 8.667 7.40487C8.71511 7.28502 8.80897 7.1896 8.92776 7.13995C9.04685 7.09029 9.181 7.09055 9.29956 7.141C9.47349 7.21459 11.0116 7.89133 11.3746 8.97811C11.5477 9.49809 11.6353 10.7601 11.6353 12.7285C11.6353 12.9937 11.4205 13.2085 11.1554 13.2085H3.81889C3.55397 13.2085 3.3392 12.994 3.3392 12.7288C3.33926 12.4635 3.55403 12.2488 3.81921 12.2488Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.017 7.675C12.6829 7.675 13.2244 6.97823 13.2244 6.12206C13.2244 5.26668 12.6829 4.5707 12.017 4.5707C11.6762 4.5707 11.3384 4.76777 11.1357 5.08469C10.9872 5.31686 10.7862 5.81059 11.1086 6.5092C11.2196 6.74996 11.1146 7.03492 10.8738 7.14618C10.6328 7.25695 10.3481 7.15216 10.2371 6.91141C9.86169 6.09789 9.89471 5.24383 10.3276 4.56733C10.7108 3.96858 11.3423 3.61108 12.0173 3.61108C13.2122 3.61108 14.1843 4.73736 14.1843 6.12209C14.1843 7.50758 13.2122 8.63465 12.0173 8.63465C11.7521 8.63465 11.5371 8.42014 11.5371 8.15496C11.5371 7.88974 11.7518 7.675 12.017 7.675Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.6236 11.792H14.0223C14.001 11.3167 13.9579 10.6101 13.8796 10.1946C13.7782 9.65223 13.4865 9.34624 13.2595 9.18502C13.043 9.03163 12.9923 8.73211 13.1459 8.51605C13.2993 8.29947 13.5986 8.24852 13.8149 8.40244C14.1191 8.61823 14.6547 9.11533 14.8229 10.0175C14.9622 10.7577 14.9984 12.1991 14.9999 12.2599C15.0028 12.3894 14.9537 12.5142 14.8635 12.6068C14.7732 12.6993 14.6492 12.7513 14.52 12.7513H12.6236C12.3584 12.7513 12.1437 12.5371 12.1437 12.2719C12.1436 12.0067 12.3584 11.792 12.6236 11.792Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.815227 6.12151C0.815227 4.73678 1.78735 3.6105 2.98227 3.6105C3.65748 3.6105 4.28925 3.96774 4.67273 4.56649C5.1056 5.24272 5.13888 6.09705 4.76398 6.91056C4.65295 7.15105 4.36776 7.25661 4.12727 7.1456C3.88678 7.0346 3.78123 6.74964 3.89223 6.50889C4.21463 5.81004 4.01313 5.31658 3.86466 5.08438C3.66161 4.76746 3.32389 4.57038 2.9825 4.57038C2.31667 4.57038 1.77511 5.26639 1.77511 6.12174C1.77511 6.97789 2.31667 7.67469 2.9825 7.67469C3.24769 7.67469 3.46246 7.88946 3.46246 8.15464C3.46246 8.41983 3.24769 8.6346 2.9825 8.6346C1.78788 8.6346 0.81549 7.50753 0.815227 6.12151Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.177246 10.0185C0.338959 9.14576 0.847505 8.65385 1.1361 8.43855C1.34852 8.28047 1.64933 8.32363 1.80791 8.53605C1.96625 8.74847 1.92257 9.04955 1.71041 9.20786C1.49488 9.36855 1.21798 9.66962 1.12075 10.195C1.0425 10.61 0.999345 11.3164 0.978018 11.7914H2.37704C2.64223 11.7914 2.85699 12.0062 2.85699 12.2714C2.85699 12.5365 2.64223 12.7513 2.37704 12.7513H0.480135C0.350911 12.7513 0.227165 12.6993 0.136436 12.6065C0.0464687 12.514 -0.00292468 12.3889 0.000209808 12.2597C0.0017333 12.1989 0.0376215 10.7572 0.177246 10.0185Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_48_23">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="matrix(-1 0 0 1 15 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Invite Guest</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_685_11)">
                      <path
                        d="M7.59973 7.81667C7.51808 7.87022 7.42682 7.89597 7.33609 7.89597C7.17983 7.89597 7.0267 7.82007 6.93492 7.67991C6.78905 7.45841 6.85016 7.1607 7.07167 7.01487C8.09213 6.34306 8.6363 5.59894 8.78398 4.6739C8.8521 4.23918 8.76163 3.57932 8.40076 3.15763C8.16678 2.88439 7.85815 2.75127 7.457 2.75127C6.67026 2.75127 6.34838 3.31 6.22646 3.64277C5.93189 4.44562 6.17498 5.44505 6.79116 5.96684C6.99368 6.13843 7.01864 6.44132 6.84759 6.64334C6.676 6.84613 6.37337 6.87109 6.17109 6.69976C5.24786 5.91824 4.89218 4.49373 5.32508 3.31258C5.67399 2.36023 6.47113 1.79163 7.45703 1.79163C8.13613 1.79163 8.71487 2.04823 9.13061 2.53363C9.72989 3.23483 9.82946 4.20487 9.73223 4.82389C9.47791 6.41533 8.39323 7.29409 7.59973 7.81667Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M3.81921 12.2488H10.6739C10.6565 10.0989 10.5236 9.46035 10.4641 9.282C10.3331 8.88967 9.79463 8.48615 9.32326 8.22254C8.89738 8.89333 8.22115 9.29319 7.4695 9.29319H7.46924C6.72618 9.29293 6.05566 8.89333 5.63186 8.22281C5.16049 8.48644 4.62283 8.88996 4.49205 9.28177C4.32304 9.78952 4.33268 10.5035 4.34047 11.077C4.34203 11.1948 4.34361 11.3071 4.34361 11.4114C4.34361 11.6766 4.12884 11.8913 3.86365 11.8913C3.59847 11.8913 3.3837 11.6766 3.3837 11.4114C3.3837 11.3113 3.38215 11.2034 3.3806 11.09C3.37148 10.4439 3.36032 9.64005 3.5813 8.97785C3.94372 7.89159 5.48158 7.21459 5.65577 7.141C5.77433 7.09055 5.90848 7.09006 6.02756 7.13995C6.14665 7.18987 6.24049 7.28528 6.28833 7.40487C6.52076 7.98595 6.96222 8.33305 7.46921 8.33305C7.46948 8.33305 7.46948 8.33305 7.46948 8.33305C7.97905 8.33305 8.43767 7.97737 8.667 7.40487C8.71511 7.28502 8.80897 7.1896 8.92776 7.13995C9.04685 7.09029 9.181 7.09055 9.29956 7.141C9.47349 7.21459 11.0116 7.89133 11.3746 8.97811C11.5477 9.49809 11.6353 10.7601 11.6353 12.7285C11.6353 12.9937 11.4205 13.2085 11.1554 13.2085H3.81889C3.55397 13.2085 3.3392 12.994 3.3392 12.7288C3.33926 12.4635 3.55403 12.2488 3.81921 12.2488Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.017 7.675C12.6829 7.675 13.2244 6.97823 13.2244 6.12206C13.2244 5.26668 12.6829 4.5707 12.017 4.5707C11.6762 4.5707 11.3384 4.76777 11.1357 5.08469C10.9872 5.31686 10.7862 5.81059 11.1086 6.5092C11.2196 6.74996 11.1146 7.03492 10.8738 7.14618C10.6328 7.25695 10.3481 7.15216 10.2371 6.91141C9.86169 6.09789 9.89471 5.24383 10.3276 4.56733C10.7108 3.96858 11.3423 3.61108 12.0173 3.61108C13.2122 3.61108 14.1843 4.73736 14.1843 6.12209C14.1843 7.50758 13.2122 8.63465 12.0173 8.63465C11.7521 8.63465 11.5371 8.42014 11.5371 8.15496C11.5371 7.88974 11.7518 7.675 12.017 7.675Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.6236 11.792H14.0223C14.001 11.3167 13.9579 10.6101 13.8796 10.1946C13.7782 9.65223 13.4865 9.34624 13.2595 9.18502C13.043 9.03163 12.9923 8.73211 13.1459 8.51605C13.2993 8.29947 13.5986 8.24852 13.8149 8.40244C14.1191 8.61823 14.6547 9.11533 14.8229 10.0175C14.9622 10.7577 14.9984 12.1991 14.9999 12.2599C15.0028 12.3894 14.9537 12.5142 14.8635 12.6068C14.7732 12.6993 14.6492 12.7513 14.52 12.7513H12.6236C12.3584 12.7513 12.1437 12.5371 12.1437 12.2719C12.1436 12.0067 12.3584 11.792 12.6236 11.792Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.815227 6.12151C0.815227 4.73678 1.78735 3.6105 2.98227 3.6105C3.65748 3.6105 4.28925 3.96774 4.67273 4.56649C5.1056 5.24272 5.13888 6.09705 4.76398 6.91056C4.65295 7.15105 4.36776 7.25661 4.12727 7.1456C3.88678 7.0346 3.78123 6.74964 3.89223 6.50889C4.21463 5.81004 4.01313 5.31658 3.86466 5.08438C3.66161 4.76746 3.32389 4.57038 2.9825 4.57038C2.31667 4.57038 1.77511 5.26639 1.77511 6.12174C1.77511 6.97789 2.31667 7.67469 2.9825 7.67469C3.24769 7.67469 3.46246 7.88946 3.46246 8.15464C3.46246 8.41983 3.24769 8.6346 2.9825 8.6346C1.78788 8.6346 0.81549 7.50753 0.815227 6.12151Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.177246 10.0185C0.338959 9.14576 0.847505 8.65385 1.1361 8.43855C1.34852 8.28047 1.64933 8.32363 1.80791 8.53605C1.96625 8.74847 1.92257 9.04955 1.71041 9.20786C1.49488 9.36855 1.21798 9.66962 1.12075 10.195C1.0425 10.61 0.999345 11.3164 0.978018 11.7914H2.37704C2.64223 11.7914 2.85699 12.0062 2.85699 12.2714C2.85699 12.5365 2.64223 12.7513 2.37704 12.7513H0.480135C0.350911 12.7513 0.227165 12.6993 0.136436 12.6065C0.0464687 12.514 -0.00292468 12.3889 0.000209808 12.2597C0.0017333 12.1989 0.0376215 10.7572 0.177246 10.0185Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_685_11">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="matrix(-1 0 0 1 15 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Coupons</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <path
                      d="M2.20831 11.25H13.4583C14.4939 11.25 15.3333 10.4106 15.3333 9.375V6.92375L14.6483 6.92563C13.9608 6.9075 13.4071 6.3425 13.4071 5.65063C13.4071 4.95875 13.9596 4.395 14.6458 4.37563L15.3333 4.3775V1.875C15.3333 0.839375 14.4939 0 13.4583 0H2.20831C1.17269 0 0.333313 0.839375 0.333313 1.875V4.375H0.888313C1.51144 4.375 2.08956 4.79938 2.19081 5.41375C2.31956 6.19625 1.71706 6.875 0.958313 6.875H0.333313V9.375C0.333313 10.4106 1.17269 11.25 2.20831 11.25ZM13.4583 10H2.20831C1.86331 10 1.58331 9.72 1.58331 9.375V8.04625C2.66019 7.76812 3.45831 6.78813 3.45831 5.625C3.45831 4.46187 2.66019 3.4825 1.58331 3.20375V1.875C1.58331 1.53 1.86331 1.25 2.20831 1.25H13.4583C13.8033 1.25 14.0833 1.53 14.0833 1.875V3.19687C12.9789 3.46687 12.1571 4.46438 12.1571 5.65063C12.1571 6.83688 12.9789 7.83437 14.0833 8.10437V9.375C14.0833 9.72 13.8033 10 13.4583 10Z"
                      fill="white"
                      fillOpacity="0.7"
                    />
                  </svg>
                </span>
                <span className="menu-label">Event Stuff</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_685_11)">
                      <path
                        d="M7.59973 7.81667C7.51808 7.87022 7.42682 7.89597 7.33609 7.89597C7.17983 7.89597 7.0267 7.82007 6.93492 7.67991C6.78905 7.45841 6.85016 7.1607 7.07167 7.01487C8.09213 6.34306 8.6363 5.59894 8.78398 4.6739C8.8521 4.23918 8.76163 3.57932 8.40076 3.15763C8.16678 2.88439 7.85815 2.75127 7.457 2.75127C6.67026 2.75127 6.34838 3.31 6.22646 3.64277C5.93189 4.44562 6.17498 5.44505 6.79116 5.96684C6.99368 6.13843 7.01864 6.44132 6.84759 6.64334C6.676 6.84613 6.37337 6.87109 6.17109 6.69976C5.24786 5.91824 4.89218 4.49373 5.32508 3.31258C5.67399 2.36023 6.47113 1.79163 7.45703 1.79163C8.13613 1.79163 8.71487 2.04823 9.13061 2.53363C9.72989 3.23483 9.82946 4.20487 9.73223 4.82389C9.47791 6.41533 8.39323 7.29409 7.59973 7.81667Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M3.81921 12.2488H10.6739C10.6565 10.0989 10.5236 9.46035 10.4641 9.282C10.3331 8.88967 9.79463 8.48615 9.32326 8.22254C8.89738 8.89333 8.22115 9.29319 7.4695 9.29319H7.46924C6.72618 9.29293 6.05566 8.89333 5.63186 8.22281C5.16049 8.48644 4.62283 8.88996 4.49205 9.28177C4.32304 9.78952 4.33268 10.5035 4.34047 11.077C4.34203 11.1948 4.34361 11.3071 4.34361 11.4114C4.34361 11.6766 4.12884 11.8913 3.86365 11.8913C3.59847 11.8913 3.3837 11.6766 3.3837 11.4114C3.3837 11.3113 3.38215 11.2034 3.3806 11.09C3.37148 10.4439 3.36032 9.64005 3.5813 8.97785C3.94372 7.89159 5.48158 7.21459 5.65577 7.141C5.77433 7.09055 5.90848 7.09006 6.02756 7.13995C6.14665 7.18987 6.24049 7.28528 6.28833 7.40487C6.52076 7.98595 6.96222 8.33305 7.46921 8.33305C7.46948 8.33305 7.46948 8.33305 7.46948 8.33305C7.97905 8.33305 8.43767 7.97737 8.667 7.40487C8.71511 7.28502 8.80897 7.1896 8.92776 7.13995C9.04685 7.09029 9.181 7.09055 9.29956 7.141C9.47349 7.21459 11.0116 7.89133 11.3746 8.97811C11.5477 9.49809 11.6353 10.7601 11.6353 12.7285C11.6353 12.9937 11.4205 13.2085 11.1554 13.2085H3.81889C3.55397 13.2085 3.3392 12.994 3.3392 12.7288C3.33926 12.4635 3.55403 12.2488 3.81921 12.2488Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.017 7.675C12.6829 7.675 13.2244 6.97823 13.2244 6.12206C13.2244 5.26668 12.6829 4.5707 12.017 4.5707C11.6762 4.5707 11.3384 4.76777 11.1357 5.08469C10.9872 5.31686 10.7862 5.81059 11.1086 6.5092C11.2196 6.74996 11.1146 7.03492 10.8738 7.14618C10.6328 7.25695 10.3481 7.15216 10.2371 6.91141C9.86169 6.09789 9.89471 5.24383 10.3276 4.56733C10.7108 3.96858 11.3423 3.61108 12.0173 3.61108C13.2122 3.61108 14.1843 4.73736 14.1843 6.12209C14.1843 7.50758 13.2122 8.63465 12.0173 8.63465C11.7521 8.63465 11.5371 8.42014 11.5371 8.15496C11.5371 7.88974 11.7518 7.675 12.017 7.675Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.6236 11.792H14.0223C14.001 11.3167 13.9579 10.6101 13.8796 10.1946C13.7782 9.65223 13.4865 9.34624 13.2595 9.18502C13.043 9.03163 12.9923 8.73211 13.1459 8.51605C13.2993 8.29947 13.5986 8.24852 13.8149 8.40244C14.1191 8.61823 14.6547 9.11533 14.8229 10.0175C14.9622 10.7577 14.9984 12.1991 14.9999 12.2599C15.0028 12.3894 14.9537 12.5142 14.8635 12.6068C14.7732 12.6993 14.6492 12.7513 14.52 12.7513H12.6236C12.3584 12.7513 12.1437 12.5371 12.1437 12.2719C12.1436 12.0067 12.3584 11.792 12.6236 11.792Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.815227 6.12151C0.815227 4.73678 1.78735 3.6105 2.98227 3.6105C3.65748 3.6105 4.28925 3.96774 4.67273 4.56649C5.1056 5.24272 5.13888 6.09705 4.76398 6.91056C4.65295 7.15105 4.36776 7.25661 4.12727 7.1456C3.88678 7.0346 3.78123 6.74964 3.89223 6.50889C4.21463 5.81004 4.01313 5.31658 3.86466 5.08438C3.66161 4.76746 3.32389 4.57038 2.9825 4.57038C2.31667 4.57038 1.77511 5.26639 1.77511 6.12174C1.77511 6.97789 2.31667 7.67469 2.9825 7.67469C3.24769 7.67469 3.46246 7.88946 3.46246 8.15464C3.46246 8.41983 3.24769 8.6346 2.9825 8.6346C1.78788 8.6346 0.81549 7.50753 0.815227 6.12151Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.177246 10.0185C0.338959 9.14576 0.847505 8.65385 1.1361 8.43855C1.34852 8.28047 1.64933 8.32363 1.80791 8.53605C1.96625 8.74847 1.92257 9.04955 1.71041 9.20786C1.49488 9.36855 1.21798 9.66962 1.12075 10.195C1.0425 10.61 0.999345 11.3164 0.978018 11.7914H2.37704C2.64223 11.7914 2.85699 12.0062 2.85699 12.2714C2.85699 12.5365 2.64223 12.7513 2.37704 12.7513H0.480135C0.350911 12.7513 0.227165 12.6993 0.136436 12.6065C0.0464687 12.514 -0.00292468 12.3889 0.000209808 12.2597C0.0017333 12.1989 0.0376215 10.7572 0.177246 10.0185Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_685_11">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="matrix(-1 0 0 1 15 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Financial</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_685_11)">
                      <path
                        d="M7.59973 7.81667C7.51808 7.87022 7.42682 7.89597 7.33609 7.89597C7.17983 7.89597 7.0267 7.82007 6.93492 7.67991C6.78905 7.45841 6.85016 7.1607 7.07167 7.01487C8.09213 6.34306 8.6363 5.59894 8.78398 4.6739C8.8521 4.23918 8.76163 3.57932 8.40076 3.15763C8.16678 2.88439 7.85815 2.75127 7.457 2.75127C6.67026 2.75127 6.34838 3.31 6.22646 3.64277C5.93189 4.44562 6.17498 5.44505 6.79116 5.96684C6.99368 6.13843 7.01864 6.44132 6.84759 6.64334C6.676 6.84613 6.37337 6.87109 6.17109 6.69976C5.24786 5.91824 4.89218 4.49373 5.32508 3.31258C5.67399 2.36023 6.47113 1.79163 7.45703 1.79163C8.13613 1.79163 8.71487 2.04823 9.13061 2.53363C9.72989 3.23483 9.82946 4.20487 9.73223 4.82389C9.47791 6.41533 8.39323 7.29409 7.59973 7.81667Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M3.81921 12.2488H10.6739C10.6565 10.0989 10.5236 9.46035 10.4641 9.282C10.3331 8.88967 9.79463 8.48615 9.32326 8.22254C8.89738 8.89333 8.22115 9.29319 7.4695 9.29319H7.46924C6.72618 9.29293 6.05566 8.89333 5.63186 8.22281C5.16049 8.48644 4.62283 8.88996 4.49205 9.28177C4.32304 9.78952 4.33268 10.5035 4.34047 11.077C4.34203 11.1948 4.34361 11.3071 4.34361 11.4114C4.34361 11.6766 4.12884 11.8913 3.86365 11.8913C3.59847 11.8913 3.3837 11.6766 3.3837 11.4114C3.3837 11.3113 3.38215 11.2034 3.3806 11.09C3.37148 10.4439 3.36032 9.64005 3.5813 8.97785C3.94372 7.89159 5.48158 7.21459 5.65577 7.141C5.77433 7.09055 5.90848 7.09006 6.02756 7.13995C6.14665 7.18987 6.24049 7.28528 6.28833 7.40487C6.52076 7.98595 6.96222 8.33305 7.46921 8.33305C7.46948 8.33305 7.46948 8.33305 7.46948 8.33305C7.97905 8.33305 8.43767 7.97737 8.667 7.40487C8.71511 7.28502 8.80897 7.1896 8.92776 7.13995C9.04685 7.09029 9.181 7.09055 9.29956 7.141C9.47349 7.21459 11.0116 7.89133 11.3746 8.97811C11.5477 9.49809 11.6353 10.7601 11.6353 12.7285C11.6353 12.9937 11.4205 13.2085 11.1554 13.2085H3.81889C3.55397 13.2085 3.3392 12.994 3.3392 12.7288C3.33926 12.4635 3.55403 12.2488 3.81921 12.2488Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.017 7.675C12.6829 7.675 13.2244 6.97823 13.2244 6.12206C13.2244 5.26668 12.6829 4.5707 12.017 4.5707C11.6762 4.5707 11.3384 4.76777 11.1357 5.08469C10.9872 5.31686 10.7862 5.81059 11.1086 6.5092C11.2196 6.74996 11.1146 7.03492 10.8738 7.14618C10.6328 7.25695 10.3481 7.15216 10.2371 6.91141C9.86169 6.09789 9.89471 5.24383 10.3276 4.56733C10.7108 3.96858 11.3423 3.61108 12.0173 3.61108C13.2122 3.61108 14.1843 4.73736 14.1843 6.12209C14.1843 7.50758 13.2122 8.63465 12.0173 8.63465C11.7521 8.63465 11.5371 8.42014 11.5371 8.15496C11.5371 7.88974 11.7518 7.675 12.017 7.675Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.6236 11.792H14.0223C14.001 11.3167 13.9579 10.6101 13.8796 10.1946C13.7782 9.65223 13.4865 9.34624 13.2595 9.18502C13.043 9.03163 12.9923 8.73211 13.1459 8.51605C13.2993 8.29947 13.5986 8.24852 13.8149 8.40244C14.1191 8.61823 14.6547 9.11533 14.8229 10.0175C14.9622 10.7577 14.9984 12.1991 14.9999 12.2599C15.0028 12.3894 14.9537 12.5142 14.8635 12.6068C14.7732 12.6993 14.6492 12.7513 14.52 12.7513H12.6236C12.3584 12.7513 12.1437 12.5371 12.1437 12.2719C12.1436 12.0067 12.3584 11.792 12.6236 11.792Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.815227 6.12151C0.815227 4.73678 1.78735 3.6105 2.98227 3.6105C3.65748 3.6105 4.28925 3.96774 4.67273 4.56649C5.1056 5.24272 5.13888 6.09705 4.76398 6.91056C4.65295 7.15105 4.36776 7.25661 4.12727 7.1456C3.88678 7.0346 3.78123 6.74964 3.89223 6.50889C4.21463 5.81004 4.01313 5.31658 3.86466 5.08438C3.66161 4.76746 3.32389 4.57038 2.9825 4.57038C2.31667 4.57038 1.77511 5.26639 1.77511 6.12174C1.77511 6.97789 2.31667 7.67469 2.9825 7.67469C3.24769 7.67469 3.46246 7.88946 3.46246 8.15464C3.46246 8.41983 3.24769 8.6346 2.9825 8.6346C1.78788 8.6346 0.81549 7.50753 0.815227 6.12151Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.177246 10.0185C0.338959 9.14576 0.847505 8.65385 1.1361 8.43855C1.34852 8.28047 1.64933 8.32363 1.80791 8.53605C1.96625 8.74847 1.92257 9.04955 1.71041 9.20786C1.49488 9.36855 1.21798 9.66962 1.12075 10.195C1.0425 10.61 0.999345 11.3164 0.978018 11.7914H2.37704C2.64223 11.7914 2.85699 12.0062 2.85699 12.2714C2.85699 12.5365 2.64223 12.7513 2.37704 12.7513H0.480135C0.350911 12.7513 0.227165 12.6993 0.136436 12.6065C0.0464687 12.514 -0.00292468 12.3889 0.000209808 12.2597C0.0017333 12.1989 0.0376215 10.7572 0.177246 10.0185Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_685_11">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="matrix(-1 0 0 1 15 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Subscription</span>
              </div>
            </li>
            <li className="main-menu">
              <div className="menu-list">
                <span className="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_685_11)">
                      <path
                        d="M7.59973 7.81667C7.51808 7.87022 7.42682 7.89597 7.33609 7.89597C7.17983 7.89597 7.0267 7.82007 6.93492 7.67991C6.78905 7.45841 6.85016 7.1607 7.07167 7.01487C8.09213 6.34306 8.6363 5.59894 8.78398 4.6739C8.8521 4.23918 8.76163 3.57932 8.40076 3.15763C8.16678 2.88439 7.85815 2.75127 7.457 2.75127C6.67026 2.75127 6.34838 3.31 6.22646 3.64277C5.93189 4.44562 6.17498 5.44505 6.79116 5.96684C6.99368 6.13843 7.01864 6.44132 6.84759 6.64334C6.676 6.84613 6.37337 6.87109 6.17109 6.69976C5.24786 5.91824 4.89218 4.49373 5.32508 3.31258C5.67399 2.36023 6.47113 1.79163 7.45703 1.79163C8.13613 1.79163 8.71487 2.04823 9.13061 2.53363C9.72989 3.23483 9.82946 4.20487 9.73223 4.82389C9.47791 6.41533 8.39323 7.29409 7.59973 7.81667Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M3.81921 12.2488H10.6739C10.6565 10.0989 10.5236 9.46035 10.4641 9.282C10.3331 8.88967 9.79463 8.48615 9.32326 8.22254C8.89738 8.89333 8.22115 9.29319 7.4695 9.29319H7.46924C6.72618 9.29293 6.05566 8.89333 5.63186 8.22281C5.16049 8.48644 4.62283 8.88996 4.49205 9.28177C4.32304 9.78952 4.33268 10.5035 4.34047 11.077C4.34203 11.1948 4.34361 11.3071 4.34361 11.4114C4.34361 11.6766 4.12884 11.8913 3.86365 11.8913C3.59847 11.8913 3.3837 11.6766 3.3837 11.4114C3.3837 11.3113 3.38215 11.2034 3.3806 11.09C3.37148 10.4439 3.36032 9.64005 3.5813 8.97785C3.94372 7.89159 5.48158 7.21459 5.65577 7.141C5.77433 7.09055 5.90848 7.09006 6.02756 7.13995C6.14665 7.18987 6.24049 7.28528 6.28833 7.40487C6.52076 7.98595 6.96222 8.33305 7.46921 8.33305C7.46948 8.33305 7.46948 8.33305 7.46948 8.33305C7.97905 8.33305 8.43767 7.97737 8.667 7.40487C8.71511 7.28502 8.80897 7.1896 8.92776 7.13995C9.04685 7.09029 9.181 7.09055 9.29956 7.141C9.47349 7.21459 11.0116 7.89133 11.3746 8.97811C11.5477 9.49809 11.6353 10.7601 11.6353 12.7285C11.6353 12.9937 11.4205 13.2085 11.1554 13.2085H3.81889C3.55397 13.2085 3.3392 12.994 3.3392 12.7288C3.33926 12.4635 3.55403 12.2488 3.81921 12.2488Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.017 7.675C12.6829 7.675 13.2244 6.97823 13.2244 6.12206C13.2244 5.26668 12.6829 4.5707 12.017 4.5707C11.6762 4.5707 11.3384 4.76777 11.1357 5.08469C10.9872 5.31686 10.7862 5.81059 11.1086 6.5092C11.2196 6.74996 11.1146 7.03492 10.8738 7.14618C10.6328 7.25695 10.3481 7.15216 10.2371 6.91141C9.86169 6.09789 9.89471 5.24383 10.3276 4.56733C10.7108 3.96858 11.3423 3.61108 12.0173 3.61108C13.2122 3.61108 14.1843 4.73736 14.1843 6.12209C14.1843 7.50758 13.2122 8.63465 12.0173 8.63465C11.7521 8.63465 11.5371 8.42014 11.5371 8.15496C11.5371 7.88974 11.7518 7.675 12.017 7.675Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M12.6236 11.792H14.0223C14.001 11.3167 13.9579 10.6101 13.8796 10.1946C13.7782 9.65223 13.4865 9.34624 13.2595 9.18502C13.043 9.03163 12.9923 8.73211 13.1459 8.51605C13.2993 8.29947 13.5986 8.24852 13.8149 8.40244C14.1191 8.61823 14.6547 9.11533 14.8229 10.0175C14.9622 10.7577 14.9984 12.1991 14.9999 12.2599C15.0028 12.3894 14.9537 12.5142 14.8635 12.6068C14.7732 12.6993 14.6492 12.7513 14.52 12.7513H12.6236C12.3584 12.7513 12.1437 12.5371 12.1437 12.2719C12.1436 12.0067 12.3584 11.792 12.6236 11.792Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.815227 6.12151C0.815227 4.73678 1.78735 3.6105 2.98227 3.6105C3.65748 3.6105 4.28925 3.96774 4.67273 4.56649C5.1056 5.24272 5.13888 6.09705 4.76398 6.91056C4.65295 7.15105 4.36776 7.25661 4.12727 7.1456C3.88678 7.0346 3.78123 6.74964 3.89223 6.50889C4.21463 5.81004 4.01313 5.31658 3.86466 5.08438C3.66161 4.76746 3.32389 4.57038 2.9825 4.57038C2.31667 4.57038 1.77511 5.26639 1.77511 6.12174C1.77511 6.97789 2.31667 7.67469 2.9825 7.67469C3.24769 7.67469 3.46246 7.88946 3.46246 8.15464C3.46246 8.41983 3.24769 8.6346 2.9825 8.6346C1.78788 8.6346 0.81549 7.50753 0.815227 6.12151Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                      <path
                        d="M0.177246 10.0185C0.338959 9.14576 0.847505 8.65385 1.1361 8.43855C1.34852 8.28047 1.64933 8.32363 1.80791 8.53605C1.96625 8.74847 1.92257 9.04955 1.71041 9.20786C1.49488 9.36855 1.21798 9.66962 1.12075 10.195C1.0425 10.61 0.999345 11.3164 0.978018 11.7914H2.37704C2.64223 11.7914 2.85699 12.0062 2.85699 12.2714C2.85699 12.5365 2.64223 12.7513 2.37704 12.7513H0.480135C0.350911 12.7513 0.227165 12.6993 0.136436 12.6065C0.0464687 12.514 -0.00292468 12.3889 0.000209808 12.2597C0.0017333 12.1989 0.0376215 10.7572 0.177246 10.0185Z"
                        fill="white"
                        fillOpacity="0.7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_685_11">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="matrix(-1 0 0 1 15 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="menu-label">Company Details</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-panel-container">
          <div className="nav-panel">
            <div className="text-content">
              <p className="text-sell">Ticket Sell</p>
              <div className="text-title">2450</div>
              <div className="text-promote">Promote</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;