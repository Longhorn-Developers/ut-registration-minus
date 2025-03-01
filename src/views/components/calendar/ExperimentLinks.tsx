import Text from '@views/components/common/Text/Text';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Flask } from '@phosphor-icons/react';
import AIDialog from 'src/views/components/calendar/AIDialog';

import OutwardArrowIcon from '~icons/material-symbols/arrow-outward';

type Props = {
    className?: string;
};

interface LinkItem {
    text: string;
    url: string;
}

const links: LinkItem[] = [
    {
        text: 'Ask AI',
        url: '#',
    },
];

/**
 * The "Resources" section of the calendar website
 * @returns
 */
export default function ExperimentLinks({ className }: Props): JSX.Element {
    const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);

    const openAIDialog = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAIDialogOpen(true);
    };

    const closeAIDialog = () => {
        setIsAIDialogOpen(false);
    };

    return (
        <article className={clsx(className, 'flex flex-col gap-spacing-3')}>
            <Text className='text-theme-black uppercase' variant='h3'>
                EXPERIMENTS
            </Text>
            <div className='flex flex-col gap-spacing-3'>
                {links.map(link => (
                    <a
                        key={link.text}
                        href={link.url}
                        onClick={openAIDialog}
                        className='flex items-center gap-spacing-2 text-ut-burntorange underline-offset-2 hover:underline'
                    >
                        <Text variant='p'>{link.text}</Text>
                        <Flask className='h-4 w-4 mr-1' />
                        <OutwardArrowIcon className='h-4 w-4' />
                    </a>
                ))}
            </div>

            <AIDialog isOpen={isAIDialogOpen} onClose={closeAIDialog} />
        </article>
    );
}
