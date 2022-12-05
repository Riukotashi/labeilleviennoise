import type { HTMLProps } from 'react'
import { mergeClasses } from '@/modules/shared/html/merge-classes'

interface Props extends HTMLProps<HTMLElement> {
  after?: string
}

export default function PricingComparisonTableRowCell({
  className,
  children,
  after,
}: Props) {
  return (
    <td className={mergeClasses('px-2 py-3', className)}>
      {children}
      {after && <small className="block text-sm text-gray-500">{after}</small>}
    </td>
  )
}
