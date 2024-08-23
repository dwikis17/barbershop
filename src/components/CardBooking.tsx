import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CardBooking() {
    return (
        <Card className="sm:w-[380px] w-[350px] " >
            <CardHeader>
                <CardTitle>Book now</CardTitle>
                <CardDescription>Book. Pay. And see the result.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="08xxxxxxxx" type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Pick Location" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="bsd">BSD</SelectItem>

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button >Book</Button>
            </CardFooter>
        </Card>
    )
}