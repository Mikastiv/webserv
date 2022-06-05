/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Connection.cpp                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mleblanc <mleblanc@student.42quebec.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/06/04 18:10:03 by mleblanc          #+#    #+#             */
/*   Updated: 2022/06/05 08:38:48 by mleblanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "Connection.hpp"
#include "Utils.hpp"
#include <unistd.h>
#include <fcntl.h>

Connection::Connection(const TcpStream* stream) : Socket(), stream_(stream)
{
}

void Connection::init()
{
    fd_ = accept(host_fd(), reinterpret_cast<sockaddr*>(&addr_), &addrlen_);
    if (fd_ == -1) {
        exception_errno<Exception>("Error while accepting connection: ");
    }
    is_init_ = true;

    if (fcntl(fd(), F_SETFL, O_NONBLOCK) == -1) {
        exception_errno<Exception>("Error while setting socket to non-blocking: ");
    }
}

SocketType Connection::type() const
{
    return CONNECTION;
}

int Connection::host_fd() const
{
    return stream_->fd();
}

#include <iostream>
void Connection::print()
{
    buf_.push_back(0);
    std::cout << buf_.data() << std::endl;
}
