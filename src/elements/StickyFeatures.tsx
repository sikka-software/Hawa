import React from "react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

type StickyFeaturesType = {
  features?: Feature[]
  tag?: string
  title?: string
  description?: string
}

export const StickyFeatures: React.FC<StickyFeaturesType> = (props) => {
  return (
    <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:flex-row lg:px-8">
        <div className="w-full md:sticky md:top-10 md:w-[28rem]">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            {props.tag}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </p>
          <p className="mb-2 mt-6 text-base leading-7 text-gray-600">
            {props.description}
          </p>
        </div>
        <div className="mt-5 w-full min-w-0 flex-1 md:mt-0">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:max-w-xl lg:max-w-none lg:gap-y-16">
            {props.features.map((f) => (
              <div className="relative rounded-lg bg-gray-50 p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  {f.icon}
                </div>

                <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                  {f.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {f.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
