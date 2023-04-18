import React from 'react'
import Link from 'next/link';
import { Icon } from '../../components';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const GingerButton = () => {

    return (
        <div className="fixed right-4 bottom-5 flex items-center justify-center overflow-hidden">
            <Link href='/'>
                <Icon name='ginger' size={140} />
            </Link>
        </div>
    )
}

