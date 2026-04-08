import svgPaths from "./svg-vxfm1r2ksg";

function Background() {
  return (
    <div className="absolute h-[174px] left-0 overflow-clip top-0 w-[375px]" data-name="Background">
      <div className="absolute bg-gradient-to-b from-[#5e7989] from-[11.145%] h-[205px] left-0 to-[#bec9d6] top-0 w-[375px]" data-name="Background" />
      <div className="absolute flex items-center justify-center left-[106px] size-[456.128px] top-[-110px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <div className="bg-gradient-to-r from-[rgba(255,255,255,0)] h-[136.474px] rounded-[85.618px] to-[74.627%] to-[rgba(255,255,255,0.3)] w-[508.588px]" data-name="Shape" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-35px] size-[552.673px] top-[-158px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <div className="bg-gradient-to-r from-[rgba(255,255,255,0)] h-[171.237px] rounded-[75px] to-[rgba(255,255,255,0.2)] w-[610.361px]" data-name="Shape" />
        </div>
      </div>
    </div>
  );
}

function Language() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center leading-[0] min-h-px min-w-px overflow-clip relative" data-name="Language">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[18px] text-white tracking-[-0.36px]">
        <p className="leading-[1.32]">Free Plan</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#a8b0b0] text-[16px] text-right tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.32]">$0/Month</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1f2121] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[14px] items-center p-[16px] relative w-full">
          <div className="bg-[#f1f6f6] overflow-clip relative rounded-[387px] shrink-0 size-[40px]" data-name="Custom Icon">
            <div className="absolute inset-[19.39%_21.43%_20.41%_20.41%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2653 24.0816">
                <path d={svgPaths.p339f7c30} fill="url(#paint0_linear_13_4906)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_4906" x1="11.6327" x2="11.6327" y1="-2.68398" y2="24.0816">
                    <stop stopColor="#5E7989" />
                    <stop offset="1" stopColor="#BEC9D6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <Language />
        </div>
      </div>
    </div>
  );
}

function Language1() {
  return (
    <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[14px] items-center leading-[0] overflow-clip relative shrink-0 text-[16px] tracking-[-0.16px] w-full" data-name="Language">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#595e5e]">
        <p className="leading-[1.32]">Image Generator</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-right whitespace-nowrap">
        <p className="leading-[1.32]">10 Daily Limit</p>
      </div>
    </div>
  );
}

function Language2() {
  return (
    <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[14px] items-center leading-[0] overflow-clip relative shrink-0 text-[16px] tracking-[-0.16px] w-full" data-name="Language">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#595e5e]">
        <p className="leading-[1.32]">Smart Search</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#1f2121] text-right">
        <p className="leading-[1.32]">15 Daily Limit</p>
      </div>
    </div>
  );
}

function Language3() {
  return (
    <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal gap-[14px] items-center leading-[0] overflow-clip relative shrink-0 text-[16px] tracking-[-0.16px] w-full" data-name="Language">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#595e5e]">
        <p className="leading-[1.32]">Smart Chat</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#1f2121] text-right">
        <p className="leading-[1.32]">Basic Behaviour</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="List">
      <Language1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
            <line id="Divider" stroke="var(--stroke-0, #DAE1E1)" x2="319" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Language2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1">
            <line id="Divider" stroke="var(--stroke-0, #DAE1E1)" x2="319" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Language3 />
    </div>
  );
}

function Plan() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[20px] items-start left-1/2 overflow-clip pb-[18px] pt-[16px] px-[16px] rounded-[22px] top-[118px] w-[351px]" data-name="Plan">
      <Container />
      <List />
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
              <p className="leading-none">Subscribe Our Plan</p>
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
                <path d="M15 1H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
                <path d="M8 15L1 8L8 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[20px] text-center text-white tracking-[-0.2px]">
        <p className="leading-[1.3]">Your Plan</p>
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

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 pb-[16px] pt-[60px] px-[16px] top-0 w-[375px]" data-name="Top Bar">
      <Title />
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
            <path d={svgPaths.p3ecf1600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3946e280} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p14f3dc80} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p1939be00} fill="var(--fill-0, white)" id="Wifi" />
          <path d={svgPaths.p375f99c0} fill="var(--fill-0, white)" id="Mobile Signal" />
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
            <path d={svgPaths.p22383500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3403fe00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9ca1000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3257e600} fill="var(--fill-0, white)" />
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

export default function Component52Plan() {
  return (
    <div className="bg-[#f1f6f6] relative size-full" data-name="52. Plan">
      <Background />
      <Plan />
      <BottomBar />
      <TopBar />
      <BottomSystemBar />
      <TopSystemBar />
    </div>
  );
}