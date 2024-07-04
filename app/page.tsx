'use client'

import RadioGroup from '@/components/RadioGroup';
import { useState } from 'react';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('3_sticks');
  return (
    <div className="flex justify-center mt-10">
       <RadioGroup selectedValue={selectedValue} onChange={setSelectedValue} />
    </div>
  );
}
