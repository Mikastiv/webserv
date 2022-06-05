/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   HeaderMap.cpp                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mleblanc <mleblanc@student.42quebec.com    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/05/31 19:50:17 by mleblanc          #+#    #+#             */
/*   Updated: 2022/06/01 02:29:41 by mleblanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "http/HeaderMap.hpp"
#include "Utils.hpp"

namespace http
{
void HeaderMap::add(const Header& header)
{
    headers_[header.name()] = header.value();
}

HeaderMap::const_iterator HeaderMap::get(std::string name) const
{
    to_lower(name);
    return headers_.find(name);
}

HeaderMap::const_iterator HeaderMap::begin() const
{
    return headers_.begin();
}

HeaderMap::const_iterator HeaderMap::end() const
{
    return headers_.end();
}

} // namespace http