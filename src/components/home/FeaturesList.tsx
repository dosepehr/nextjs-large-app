import React, { FC } from 'react';
import { Feature } from '@/utils/types/components/feature.type';
import Image from 'next/image';

type FeaturesListProps = {
    features: Feature[];
};

const FeaturesList: FC<FeaturesListProps> = ({ features }) => {
    return (
        <>
            {' '}
            <section className='dark:bg-base-75 mt-10'>
                <div className='container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5'>
                    {features.map((feature) => (
                        <article
                            className='flex-1 flex flex-col items-center lg:items-start gap-4'
                            key={`feature-${feature.title}`}
                        >
                            <Image
                                src={feature.icon}
                                width={52}
                                height={52}
                                alt=''
                            />
                            <h4 className='text-lg font-bold '>
                                {feature.title}
                            </h4>
                            <p className='max-w-md text-lg text-center lg:text-right'>
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FeaturesList;
