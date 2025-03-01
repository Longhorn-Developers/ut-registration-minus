import React from 'react';
import Dialog from '../common/Dialog';
import Text from '../common/Text/Text';
import { Flask } from '@phosphor-icons/react';

interface AIDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * A dialog component for the Ask AI feature
 */
export default function AIDialog({ isOpen, onClose }: AIDialogProps): JSX.Element {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            title={
                // <div className='flex items-center gap-2'>
                <Text variant='h2' className='text-theme-black'>
                    Ask AI
                </Text>
                // </div>
            }
            description={
                // <div className='flex items-center gap-2'>
                <Text variant='p' className='text-theme-black'>
                    Get guidance from Al on how to improve your schedule!
                </Text>
                // </div>
            }
            className='max-w-[600px] p-6'
        >
            <div className='flex flex-col gap-4'>{/* Content will be added by the user */}</div>
        </Dialog>
    );
}
