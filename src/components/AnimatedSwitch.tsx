import * as Switch from '@radix-ui/react-switch';
import { motion } from "framer-motion";

const AnimatedSwitch = () => {
    return (
        <div className="flex gap-3">
            <label htmlFor="oneway">One Way</label>
            <Switch.Root id="oneway" className="bg-slate-200 w-12 h-6 rounded-[12px]  flex items-center justify-start  pl-1 pe-1 data-[state=checked]:bg-brandprimary  data-[state=checked]:justify-end transition-colors"
            >
                {/* create framer motion span for animation */}
                <Switch.Thumb asChild >
                    <motion.span layout transition={{ type: 'spring', duration: 0.4, bounce: 0.3 }} className="block rounded-full bg-slate-50 data-[state=checked]:bg-brandprimaryforeground  h-4 w-4 " />
                </Switch.Thumb>

            </Switch.Root>
        </div>
    )
}
export default AnimatedSwitch