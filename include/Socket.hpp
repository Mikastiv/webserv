/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Socket.hpp                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mleblanc <mleblanc@student.42quebec.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/06/04 18:14:57 by mleblanc          #+#    #+#             */
/*   Updated: 2022/06/04 18:29:16 by mleblanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#pragma once

#include "ExceptionBase.hpp"

class Socket
{
public:
    class Exception : public ExceptionBase
    {
    public:
        Exception(const char* msg);
    };

public:
    Socket();
    ~Socket();

public:
    virtual void init() = 0;

public:
    int fd() const;
    bool is_init() const;

protected:
    void check_init() const;

protected:
    int fd_;
    bool is_init_;
};
