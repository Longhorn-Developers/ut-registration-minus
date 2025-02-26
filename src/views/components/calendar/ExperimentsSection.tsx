import Text from '@views/components/common/Text/Text';
import clsx from 'clsx';
import React from 'react';

import OutwardArrowIcon from '~icons/material-symbols/arrow-outward';
import Experiment from '~icons/material-symbols/experiment';
import { Flask } from '@phosphor-icons/react';
import { usePrompt } from '../common/DialogProvider/DialogProvider';
import Divider from '../common/Divider';
import { Button } from '../common/Button';
import { useState } from 'react';
import Spinner from '../common/Spinner';

type Props = {
    className?: string;
};

const responses = [
    'You can redeclare as a business major',
    "You can't handle that 8am bestie",
    'You can probably squeeze another class in between that gap',
    'Your only hope is to transfer to Austin Community College',
    'Bro why so many gen-eds',
    'This schedule is perfect actually',
    'You can convert that class to the web-based version',
    'You still need a government class to graduate, I recommend GOV 310L-WB',
    'Big yikes',
    "2 upper divs with OS? Yeah, I don' think so",
];

const queryAI = async (query: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return responses[Math.floor(Math.random() * responses.length)]!;
};

const DEFAULT_QUERY = 'How can I improve my schedule?';

const Buttons = ({ close }: { close: () => void }) => {
    const loadingRef = React.useRef<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const showDialog = usePrompt();

    const askAIOnClick = async () => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        setStatus('loading');
        const response = await queryAI(DEFAULT_QUERY); // TODO: Get query from textarea
        setStatus('success');
        loadingRef.current = false;

        setTimeout(() => {
            showDialog({
                title: 'AI Response',
                description: (
                    <>
                        {response}
                        <br />
                        <br />
                        <Text variant='mini'>Ask AI can make mistakes. Check important info.</Text>
                    </>
                ),
                buttons: childClose => (
                    <Button
                        variant='minimal'
                        color='ut-black'
                        onClick={() => {
                            childClose();
                            close();
                        }}
                    >
                        Close
                    </Button>
                ),
            });
        }, 0);
    };

    return (
        <div className='flex flex-row gap-spacing-5'>
            <Button variant='minimal' color='ut-black' onClick={close}>
                Cancel
            </Button>
            <Button color='ut-burntorange' icon={Flask} onClick={askAIOnClick} disabled={loadingRef.current}>
                Ask AI{status === 'loading' && <Spinner className='h-4 w-4' />}
            </Button>
        </div>
    );
};

/**
 * The "Resources" section of the calendar website
 * @returns
 */
export function ExperimentsSection({ className }: Props): JSX.Element {
    const showDialog = usePrompt();

    return (
        <article className={clsx(className, 'flex flex-col gap-spacing-3')}>
            <Text className='text-theme-black uppercase' variant='h3'>
                EXPERIMENTS
            </Text>
            <div className='flex flex-col gap-spacing-3'>
                <a
                    href='#'
                    onClick={e => {
                        e.preventDefault();
                        showDialog({
                            title: 'Ask AI',
                            description: (
                                <>
                                    Get guidance from AI on how to improve your schedule!
                                    <Divider
                                        orientation='horizontal'
                                        size='100%'
                                        className='mb-spacing-6 mt-spacing-5'
                                    />
                                    <textarea
                                        className='w-450px border border-radius-1 p-spacing-4 rounded resize-none'
                                        placeholder={DEFAULT_QUERY}
                                        rows={5}
                                    ></textarea>
                                    <Text variant='mini'>Ask AI can make mistakes. Check important info.</Text>
                                </>
                            ),
                            buttons: close => <Buttons close={close} />,
                        });
                    }}
                    className='flex items-center gap-spacing-2 text-ut-burntorange underline-offset-2 hover:underline cursor-pointer'
                >
                    <Text variant='p'>Ask AI</Text>
                    <Flask className='h-4 w-4' />
                    <OutwardArrowIcon className='h-4 w-4' />
                </a>
            </div>
        </article>
    );
}
