import React from "react";

type PhoneMockupProps = {
  children?: any;
  upperOverlayGradiant?: boolean;
  lowerOverlayGradiant?: boolean;
  phone?: "iphone" | "android" | "default";
  hideButtons?: boolean;
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  upperOverlayGradiant,
  lowerOverlayGradiant,
  phone,
  hideButtons
}: any) => (
  <div className="hawa-relative hawa-mx-auto hawa-h-[600px] hawa-w-[300px] hawa-rounded-[2.5rem] hawa-border-[14px] hawa-border-gray-800 hawa-bg-gray-800 hawa-dark:border-gray-800">
    {!hideButtons && (
      <>
        <div className="hawa-absolute hawa--left-[16px] hawa-top-[72px] hawa-h-[32px] hawa-w-[3px] hawa-rounded-l-lg hawa-bg-gray-800 hawa-dark:bg-gray-800"></div>
        <div className="hawa-absolute hawa--left-[16px] hawa-top-[124px] hawa-h-[46px] hawa-w-[3px] hawa-rounded-l-lg hawa-bg-gray-800 hawa-dark:bg-gray-800"></div>
        <div className="hawa-absolute hawa--left-[16px] hawa-top-[178px] hawa-h-[46px] hawa-w-[3px] hawa-rounded-l-lg hawa-bg-gray-800 hawa-dark:bg-gray-800"></div>
        <div className="hawa-absolute hawa--right-[16px] hawa-top-[142px] hawa-h-[64px] hawa-w-[3px] hawa-rounded-r-lg hawa-bg-gray-800 hawa-dark:bg-gray-800"></div>
      </>
    )}

    <div className="no-scrollbar hawa-left-0 hawa-h-[572px] hawa-w-[272px] hawa-overflow-y-scroll hawa-rounded-[2rem] hawa-bg-white hawa-[clip-path:inset(0px_-1px_0px_0px_round_2rem)] hawa-dark:bg-gray-800">
      {children}
    </div>

    {upperOverlayGradiant && (
      <div className="hawa-pointer-events-none hawa-absolute hawa-left-0 hawa-top-0 hawa-h-[72px] hawa-w-[272px] hawa-rounded-t-[2rem] hawa-bg-gradient-to-t hawa-from-transparent hawa-to-black hawa-opacity-50 hawa-[clip-path:inset(0px_0px_0px_0px_round_0rem)]"></div>
    )}
    {lowerOverlayGradiant && (
      <div className="hawa-pointer-events-none hawa-absolute hawa-bottom-0 hawa-left-0 hawa-h-[72px] hawa-w-[272px] hawa-rounded-b-[2rem] hawa-bg-gradient-to-t hawa-from-black hawa-to-transparent hawa-opacity-50 hawa-[clip-path:inset(0px_0px_0px_0px_round_0rem)]"></div>
    )}
  </div>
);
