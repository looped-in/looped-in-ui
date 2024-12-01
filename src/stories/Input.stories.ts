import { Meta, StoryObj } from "@storybook/react/*"
import Input from "../components/Input/Input"

const meta = {
  title: "Example/Input",
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: "Input",
  },
}
