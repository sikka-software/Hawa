import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaSnapchatGhost, FaTiktok } from "react-icons/fa"
import { Button } from "../elements"
import { cn } from "../util"

type FooterTypes = {
  logoText?: string
  logoURL?: string
  copyRights?: string
  variation?: "default" | "minimal"
  socialLinks?: {
    twitter?: string
    instagram?: string
    tiktok?: string
    snapchat?: string
  }
  footerLinks?: {
    title: string
    pages: {
      label: string
      link: string
    }[]
  }[]
}

export const Footer: React.FunctionComponent<FooterTypes> = ({
  variation = "default",
  ...props
}) => {
  let variationStyles = {
    default: "rounded border",
    minimal: "border-t",
  }
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between gap-8  rounded bg-background p-4",
        variationStyles[variation]
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center gap-2">
          {props.logoURL && (
            <div>
              <img className="h-8" src={props.logoURL} />
            </div>
          )}
          {props.logoText && (
            <div>
              <div className="text-2xl font-bold text-primary">
                {props.logoText}
              </div>
            </div>
          )}
        </div>
        {props.copyRights && props.footerLinks && (
          <div className="text-xs text-muted-foreground">
            © {props.copyRights} {new Date().getFullYear()}
          </div>
        )}
      </div>
      {props.copyRights && !props.footerLinks && (
        <div className="text-xs text-muted-foreground">
          © {props.copyRights} {new Date().getFullYear()}
        </div>
      )}
      {props.footerLinks?.map((pagesSection) => (
        <div className="flex w-32 flex-col gap-2">
          <div className="text-lg font-bold">{pagesSection.title}</div>
          <div className="flex flex-col gap-1">
            {pagesSection.pages.map((singlePage) => (
              <a
                className="transition-all hover:font-bold"
                href={singlePage.link}
              >
                {singlePage.label}
              </a>
            ))}
          </div>
        </div>
      ))}
      {props.socialLinks && (
        <div className="flex flex-row gap-2">
          {props.socialLinks.twitter && (
            <Button size="smallIcon" variant="ghost">
              <BsTwitter />
            </Button>
          )}
          {props.socialLinks.instagram && (
            <Button size="smallIcon" variant="ghost">
              <BsInstagram />
            </Button>
          )}
          {props.socialLinks.tiktok && (
            <Button size="smallIcon" variant="ghost">
              <FaTiktok />
            </Button>
          )}
          {props.socialLinks.snapchat && (
            <Button size="smallIcon" variant="ghost">
              <FaSnapchatGhost />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
