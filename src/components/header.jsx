import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LinkIcon, LogOut } from "lucide-react"


const Header = () => {
  const navigate = useNavigate()
  const user = true
  return (
    <nav className="py-10 flex justify-between items-center">
        <Link to="/">
        <img src="logo.png" className="h-16" alt="Trimrr logo" />
        </Link>
        <div>
            {
                !user ?
                (<Button onClick={()=>{navigate("/auth")}}>Login</Button>)
                :
               (
                <DropdownMenu>
                <DropdownMenuTrigger className="w-10 rounded overflow-hidden">
                <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>ABR</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Bhargav Raghuram</DropdownMenuLabel>
                  <DropdownMenuSeparator/>
                  <DropdownMenuItem>
                  <LinkIcon className="mr-2 h-4 w-4"/>
                    My Links
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400">
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
                )

            }
        </div>
    </nav>
  )
}

export default Header