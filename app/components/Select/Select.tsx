"use client"

import { Select } from "@chakra-ui/react";

interface Props {
  options: string[]
  value: string
  onChange: (param: string) => void
  placeholder: string
}

export function SelectComponent({ options, value, onChange, placeholder }: Props) {
  return (
    <Select w={'fit-content'} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </Select>
  );
}