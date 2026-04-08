import svgPaths from "./svg-ccop32w3sb";

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="List">
      <div className="relative shrink-0 size-[5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #1F2121)" id="Ellipse 360" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f2121] text-[14px]">
        <p className="leading-[1.3]">8 - 20 characters</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="List">
      <div className="relative shrink-0 size-[5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #1F2121)" id="Ellipse 360" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f2121] text-[14px]">
        <p className="leading-[1.3]">At least number or symbol</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="List">
      <div className="relative shrink-0 size-[5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #1F2121)" id="Ellipse 360" r="2.5" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1f2121] text-[14px]">
        <p className="leading-[1.3]">Avoid using your old password</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="List">
      <List1 />
      <List2 />
      <List3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#1f2121] text-[14px] w-[249px]">
        <p className="leading-[1.3]">Your new password must:</p>
      </div>
      <List />
    </div>
  );
}

function Requirement() {
  return (
    <div className="absolute bg-[#e0f2fe] left-[12px] rounded-[16px] top-[356px] w-[351px]" data-name="Requirement">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[14px] py-[12px] relative rounded-[inherit] w-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi:info">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
                <path d={svgPaths.p1da8ee00} id="Vector" stroke="var(--stroke-0, #0EA5E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
            <div className="absolute inset-[-30%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5.33333">
                <path d="M1 4.33333V1" id="Vector" stroke="var(--stroke-0, #0EA5E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00833 2">
                <path d="M1 1H1.00833" id="Vector" stroke="var(--stroke-0, #0EA5E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <Text />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0ea5e9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[2px] items-center left-[8px] top-[-0.5px]" data-name="Label">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#595e5e] text-[12px] whitespace-nowrap">Current Password</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] whitespace-nowrap">✲ ✲ ✲ ✲ ✲ ✲</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[2px] items-center left-[8px] top-[-0.5px]" data-name="Label">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#595e5e] text-[12px] whitespace-nowrap">New Password</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] whitespace-nowrap">✲ ✲ ✲ ✲ ✲ ✲</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[2px] items-center left-[8px] top-[-0.5px]" data-name="Label">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#595e5e] text-[12px] whitespace-nowrap">Confirm New Password</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.32] relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] whitespace-nowrap">✲ ✲ ✲ ✲ ✲ ✲</p>
    </div>
  );
}

function Password() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-1/2 overflow-clip pb-[18px] pt-[24px] px-[18px] rounded-[22px] top-[118px] w-[351px]" data-name="Password">
      <div className="relative shrink-0 w-full" data-name="Input">
        <div aria-hidden="true" className="absolute border-[#c7cece] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
            <Label />
            <Content />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:eye">
              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                <div className="absolute inset-[-6.25%_-4.55%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
                    <path d={svgPaths.p28aa9640} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input">
        <div aria-hidden="true" className="absolute border-[#c7cece] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
            <Label1 />
            <Content1 />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:eye">
              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                <div className="absolute inset-[-6.25%_-4.55%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
                    <path d={svgPaths.p28aa9640} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input">
        <div aria-hidden="true" className="absolute border-[#c7cece] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
            <Label2 />
            <Content2 />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:eye">
              <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                <div className="absolute inset-[-6.25%_-4.55%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
                    <path d={svgPaths.p28aa9640} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex gap-[8px] h-[34px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[35px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:arrow-left">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-1px_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
                <path d="M15 1H1" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
                <path d="M8 15L1 8L8 1" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#1f2121] text-[20px] text-center tracking-[-0.2px]">
        <p className="leading-[1.3]">Update Passsword</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center opacity-0 overflow-clip p-[12px] relative rounded-[12px] shrink-0 size-[34px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:clock">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
                <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-center justify-center left-1/2 pb-[40px] pt-[16px] px-[16px] w-[375px]" data-name="Bottom Bar">
      <div className="bg-[#daea69] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative size-full">
            <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1f2121] text-[16px] text-center whitespace-nowrap">
              <p className="leading-none">Update Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSystemBar() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[375px]" data-name="Bottom System Bar">
      <div className="-translate-x-1/2 absolute bg-[#1f2121] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[19.67px] top-[19.33px] w-[66.662px]" data-name="Right Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6615 11.3358">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p3ecf1600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #1F2121)" />
            <path d={svgPaths.p3946e280} fill="var(--fill-0, #1F2121)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p14f3dc80} fill="var(--fill-0, #1F2121)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p1939be00} fill="var(--fill-0, #1F2121)" id="Wifi" />
          <path d={svgPaths.p375f99c0} fill="var(--fill-0, #1F2121)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[16px] top-[14px] w-[54px]" data-name="Time">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p22383500} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p3403fe00} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p9ca1000} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p3257e600} fill="var(--fill-0, #1F2121)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[16px] top-[14px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function TopSystemBar() {
  return (
    <div className="-translate-x-1/2 absolute h-[50px] left-1/2 overflow-clip top-0 w-[375px]" data-name="Top System Bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default function Component44UpdatePassword() {
  return (
    <div className="bg-[#f1f6f6] relative size-full" data-name="44. Update Password">
      <Requirement />
      <Password />
      <div className="-translate-x-1/2 absolute bg-[#f1f6f6] content-stretch flex flex-col items-center justify-center left-1/2 pb-[16px] pt-[60px] px-[12px] top-0 w-[375px]" data-name="Top Bar">
        <Title />
      </div>
      <BottomBar />
      <BottomSystemBar />
      <TopSystemBar />
    </div>
  );
}