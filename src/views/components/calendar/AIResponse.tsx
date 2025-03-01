import React, { useState, useEffect } from 'react';
import Dialog from '../common/Dialog';
import Text from '../common/Text/Text';
import { Button } from '../common/Button';
import Divider from '../common/Divider';

interface AIResponseProps {
    isOpen: boolean;
    onClose: () => void;
    userQuery: string;
}

/**
 * A component to display AI response in a dialog
 */
export default function AIResponse({ isOpen, onClose, userQuery }: AIResponseProps): JSX.Element {
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

    const [randomResponse, setRandomResponse] = useState('');

    useEffect(() => {
        if (isOpen && responses.length > 0) {
            const randomIndex = Math.floor(Math.random() * responses.length);
            // Use non-null assertion operator to tell TypeScript this won't be undefined
            setRandomResponse(responses[randomIndex] || 'AI is thinking...');
        }
    }, [isOpen, responses]);

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            title={
                <Text
                    variant='h2'
                    className='text-theme-black'
                    style={{ marginBottom: 'var(--spacing-spacing-2, 4px)' }}
                >
                    AI Response
                </Text>
            }
            description={
                <div>
                    <Text variant='p' className='text-theme-black'>
                        {randomResponse}
                    </Text>
                    <div style={{ marginTop: 'var(--spacing-spacing-5, 16px)' }}>
                        <Divider orientation='horizontal' size='100%' />
                    </div>
                </div>
            }
            className='max-w-[600px] p-6'
        >
            <div className='flex flex-col gap-4' style={{ paddingTop: 'var(--spacing-spacing-6, 20px)' }}>
                {/* AI disclaimer */}
                <Text variant='small' className='text-theme-black/70'>
                    AI can make mistakes. Check important info.
                </Text>

                {/* Footer with close button */}
                <div className='mt-4 flex justify-end'>
                    <Button variant='minimal' color='ut-black' size='regular' onClick={onClose}>
                        Close
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}
